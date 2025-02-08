import { lazy } from 'react';

// project-imports
import Loadable from 'components/Loadable';
import DashboardLayout from 'layout/Dashboard';
import SimpleLayout from 'layout/Simple';
import { SimpleLayoutType } from 'config';

const MaintenanceError = Loadable(lazy(() => import('pages/maintenance/error/404')));

// render - sample page
const Overview = Loadable(lazy(() => import('pages/overview/overview')));
const AllQuestions = Loadable(lazy(() => import('pages/management/questions/all_questions')));
const AddOrEditQuestions = Loadable(lazy(() => import('pages/management/questions/add_or_edit_question')));

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
      path: '/management',
      element: <DashboardLayout />,
      children: [
        {
          path: 'all-questions',
          element: <AllQuestions />
        },
        {
          path: 'question',
          element: <AddOrEditQuestions />
        },
        {
          path: 'question/:id',
          element: <AddOrEditQuestions />
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
