import { lazy } from 'react';
import { createBrowserRouter } from 'react-router-dom';

import { SimpleLayoutType } from 'config';
import SimpleLayout from 'layout/Simple';
import Loadable from 'components/Loadable';

const PagesLanding = Loadable(lazy(() => import('pages/landing')));

import MainRoutes from './MainRoutes';
import LoginRoutes from './LoginRoutes';

// ==============================|| ROUTING RENDER ||============================== //

const router = createBrowserRouter(
    [
        {
            path: '/',
            element: <SimpleLayout layout={SimpleLayoutType.LANDING} />,
            children: [
                {
                    index: true,
                    element: <PagesLanding />
                }
            ]
        },
        LoginRoutes,
        MainRoutes
    ],
    {
        basename: import.meta.env.VITE_APP_BASE_NAME
    }
);

export default router;
