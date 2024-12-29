import PropTypes from 'prop-types';
import { useNavigate } from 'react-router-dom';

import ButtonBase from '@mui/material/ButtonBase';

// ==============================|| MAIN LOGO ||============================== //

export default function LogoSection({ isIcon, sx, to }) {
  const navigate = useNavigate()

  return (
    <ButtonBase
      sx={{ fontSize: "20px", fontWeight: 600, color: "#0a69a1" }}
      onClick={() => { navigate("/") }}
    >
      DRC Shala
    </ButtonBase>
  );
}

LogoSection.propTypes = { isIcon: PropTypes.bool, sx: PropTypes.any, to: PropTypes.any };
