import PropTypes from 'prop-types';
import { useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

// ==============================|| AUTH GUARD ||============================== //

export default function AuthGuard({ children }) {
  const navigate = useNavigate();
  const location = useLocation();

  return children;
}

AuthGuard.propTypes = { children: PropTypes.any };
