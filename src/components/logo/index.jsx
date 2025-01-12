import PropTypes from 'prop-types';
import { useNavigate } from 'react-router-dom';

import { ButtonBase, Typography } from '@mui/material';
import DRCSHALA from 'assets/images/drcshala.png'

// ==============================|| MAIN LOGO ||============================== //

export default function LogoSection({ isIcon, sx, to }) {
  const navigate = useNavigate()

  return (
    <ButtonBase
      sx={{ fontSize: "24px", fontWeight: 600 }}
      onClick={() => { navigate("/") }}
    >
      <img src={DRCSHALA} width="24px" />
      <Typography component="span" sx={{ color: "#0a69a1", fontSize: "22px", fontWeight: 600, letterSpacing: 0.7, ml: 1 }}>
        Drc
      </Typography>
      <Typography component="span" sx={{ color: "#f57c00", fontSize: "22px", fontWeight: 600, letterSpacing: 0.7 }}>
        shala
      </Typography>
    </ButtonBase>
  );
}

LogoSection.propTypes = { isIcon: PropTypes.bool, sx: PropTypes.any, to: PropTypes.any };
