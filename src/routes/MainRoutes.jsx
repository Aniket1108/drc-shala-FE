import { lazy } from 'react';

// project-imports
import Loadable from 'components/Loadable';
import DashboardLayout from 'layout/Dashboard';
import SimpleLayout from 'layout/Simple';
import { SimpleLayoutType } from 'config';

const MaintenanceError = Loadable(lazy(() => import('pages/maintenance/error/404')));

const AppContactUS = Loadable(lazy(() => import('pages/contact-us')));

// render - sample page
const Overview = Loadable(lazy(() => import('pages/overview/overview')));

// ==============================|| MAIN ROUTES ||============================== //

const MainRoutes = {
  path: '/',
  children: [
    {
      path: '/',
      element: <DashboardLayout />,
      children: [
        {
          path: 'Overview',
          element: <Overview />
        }
      ]
    },
    {
      path: '/',
      element: <SimpleLayout layout={SimpleLayoutType.SIMPLE} />,
      children: [
        {
          path: 'contact-us',
          element: <AppContactUS />
        }
      ]
    },
    {
      path: '*',
      element: <MaintenanceError />
    }
  ]
};

export default MainRoutes;
