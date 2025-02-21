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
const SamplePage = Loadable(lazy(() => import('pages/samplepage')));

const AllProducts = Loadable(lazy(() => import('pages/management/products/product_list')));
const ProductDetails = Loadable(lazy(() => import('pages/management/products/product_details')));

const TestSeries = Loadable(lazy(() => import('pages/management/test_series/all_test_series')));

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
        },
        {
          path: 'sample-page',
          element: <SamplePage />
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
          path: 'question/:question_id',
          element: <AddOrEditQuestions />
        },
        {
          path: 'products',
          element: <AllProducts />
        },
        // {
        //   path: 'add-product',
        //   element: <ProductDetails />
        // },
        {
          path: 'product-details/:product_id',
          element: <ProductDetails />
        },
        {
          path: 'test-series',
          element: <TestSeries />
        },
        {
          path: 'test-series/details/:test_series_id',
          element: <TestSeries />
        },
      ]
    },
    {
      path: '*',
      element: <MaintenanceError />
    }
  ]
};

export default MainRoutes;
