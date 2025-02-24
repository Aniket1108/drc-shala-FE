import PropTypes from 'prop-types';
import { lazy, Suspense } from 'react';
import { Outlet } from 'react-router-dom';

import { Box } from '@mui/system';

// project import
import Loader from 'components/Loader';
import { SimpleLayoutType } from 'config';

const Header = lazy(() => import('./Header'));
const FooterBlock = lazy(() => import('./FooterBlock'));

// ==============================|| LAYOUT - SIMPLE / LANDING ||============================== //

export default function SimpleLayout({ layout = SimpleLayoutType.SIMPLE }) {
  return (
    <Suspense fallback={<Loader />}>
      <Header />
      <Box sx={{ height: "80px" }}></Box>
      <Outlet />
      <FooterBlock isFull={layout === SimpleLayoutType.LANDING} />
    </Suspense>
  );
}

SimpleLayout.propTypes = { layout: PropTypes.any };
