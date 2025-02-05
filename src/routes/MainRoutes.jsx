import { lazy } from 'react';

// project-imports
import Loadable from 'components/Loadable';
import DashboardLayout from 'layout/Dashboard';
import PagesLayout from 'layout/Pages';
import SimpleLayout from 'layout/Simple';
import { SimpleLayoutType } from 'config';

const MaintenanceError = Loadable(lazy(() => import('pages/maintenance/error/404')));

const AppContactUS = Loadable(lazy(() => import('pages/contact-us')));
const AboutUs = Loadable(lazy(() => import('pages/about-us')));

const Overview = Loadable(lazy(() => import('pages/overview/overview')));
const Courses = Loadable(lazy(() => import('pages/courses')));
const CourseDetails = Loadable(lazy(() => import('pages/course_details')));

const Products = Loadable(lazy(() => import('pages/products/product')));
const ProductDetails = Loadable(lazy(() => import('pages/products/product_details')));

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
        },
        {
          path: 'about-us',
          element: <AboutUs />
        },
        {
          path: 'courses',
          element: <Courses type={"course"} />
        },
        {
          path: '/course/:course',
          element: <CourseDetails type={"course"} />
        },
        {
          path: 'test-series',
          element: <Courses type={"test-series"} />
        },
        {
          path: '/test-series/:course',
          element: <CourseDetails type={"test-series"} />
        },
      ]
    },
    {
      path: '/products',
      element: <DashboardLayout />,
      children: [
        {
          path: 'courses',
          element: <Products type={"course"} isUser={true} />
        },
        {
          path: '/products/course/:course',
          element: <ProductDetails />
        },
        {
          path: 'test-series',
          element: <Products type={"test-series"} isUser={true} />
        },
        {
          path: '/products/test-series/:course',
          element: <ProductDetails />
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
