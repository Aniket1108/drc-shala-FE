import { lazy } from 'react';

// project-imports
import Loadable from 'components/Loadable';
import DashboardLayout from 'layout/Dashboard';
import PagesLayout from 'layout/Pages';
import SimpleLayout from 'layout/Simple';
import { SimpleLayoutType } from 'config';

const MaintenanceError = Loadable(lazy(() => import('pages/maintenance/error/404')));
const MaintenanceError500 = Loadable(lazy(() => import('pages/maintenance/error/500')));
const MaintenanceUnderConstruction = Loadable(lazy(() => import('pages/maintenance/under-construction/under-construction')));
const MaintenanceComingSoon = Loadable(lazy(() => import('pages/maintenance/coming-soon/coming-soon')));

const AppContactUS = Loadable(lazy(() => import('pages/contact-us')));
const AboutUs = Loadable(lazy(() => import('pages/about-us')));
const JEEStudyMaterials = Loadable(lazy(() => import('pages/statics_pages/study_materials/JEE')));

// render - sample page
const Overview = Loadable(lazy(() => import('pages/overview/overview')));
const Courses = Loadable(lazy(() => import('pages/courses')));
const CourseDetails = Loadable(lazy(() => import('pages/course_details')));

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
        // {
        //   path: 'study-materials/jee',
        //   element: <JEEStudyMaterials />
        // },
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
      path: '*',
      element: <MaintenanceError />
    }
  ]
};

export default MainRoutes;
