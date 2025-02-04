import { lazy } from 'react';

// project-imports
import AuthLayout from 'layout/Auth';
import Loadable from 'components/Loadable';

// render - login
const AuthLogin = Loadable(lazy(() => import('pages/auth/auth1/login')));
const AuthForgotPassword = Loadable(lazy(() => import('pages/auth/auth1/forgot-password')));
const AuthResetPassword = Loadable(lazy(() => import('pages/auth/auth1/reset-password')));
const AuthCodeVerification = Loadable(lazy(() => import('pages/auth/auth1/code-verification')));

// ==============================|| AUTH ROUTES ||============================== //

const LoginRoutes = {
  path: '/',
  children: [
    {
      path: '/',
      element: <AuthLayout />,
      children: [
        {
          path: '/',
          element: <AuthLogin />
        },
        {
          path: 'login',
          element: <AuthLogin />
        },
        {
          path: 'forgot-password',
          element: <AuthForgotPassword />
        },
        {
          path: 'reset-password',
          element: <AuthResetPassword />
        },
        {
          path: 'code-verification',
          element: <AuthCodeVerification />
        }
      ]
    }
  ]
};

export default LoginRoutes;
