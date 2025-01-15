import PropTypes from 'prop-types';
import { useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

// project-imports
import { APP_DEFAULT_PATH } from 'config';

// ==============================|| GUEST GUARD ||============================== //

export default function GuestGuard({ children }) {

  const navigate = useNavigate();
  const location = useLocation();

  return children;
}

GuestGuard.propTypes = { children: PropTypes.any };
