import PropTypes from 'prop-types';
// material-ui
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
import Stack from '@mui/material/Stack';
import Drawer from '@mui/material/Drawer';

// project-imports
import ProductFilterView from './ProductFilterView';
import ProductFilter from './ProductFilter';
import MainCard from 'components/MainCard';
import SimpleBar from 'components/third-party/SimpleBar';

import { ThemeMode } from 'config';
import { HEADER_HEIGHT } from 'config';
import useConfig from 'hooks/useConfig';

// ==============================|| PRODUCT - FILTER DRAWER ||============================== //

export default function ProductFilterDrawer({ filter, initialState, handleDrawerOpen, openFilterDrawer, setFilter, setLoading }) {
  const theme = useTheme();

  const { mode, container } = useConfig();
  const matchDownLG = useMediaQuery(theme.breakpoints.down('lg'));
  const matchLG = useMediaQuery(theme.breakpoints.only('lg'));
  const drawerBG = mode === ThemeMode.DARK ? 'dark.main' : 'white';

  const filterIsEqual = (a1, a2) =>
    a1 === a2 ||
    (a1.length === a2.length &&
      a1.search === a2.search &&
      a1.sort === a2.sort &&
      a1.price === a2.price &&
      a1.rating === a2.rating &&
      JSON.stringify(a1.courses) === JSON.stringify(a2.courses) &&
      JSON.stringify(a1.standard) === JSON.stringify(a2.standard)
    );

  const handelFilter = (type, params, rating) => {
    console.log(type, params)
    setLoading(true);
    switch (type) {
      case 'courses':
        if (filter.courses.some((item) => item === params)) {
          setFilter({ ...filter, courses: filter.courses.filter((item) => item !== params) });
        } else {
          setFilter({ ...filter, courses: [...filter.courses, params] });
        }
        break;
      case 'standard':
        if (filter.standard.some((item) => item === params)) {
          setFilter({ ...filter, standard: filter.standard.filter((item) => item !== params) });
        } else if (filter.standard.some((item) => item === 'all') || params === 'all') {
          setFilter({ ...filter, standard: [params] });
        } else {
          setFilter({ ...filter, standard: [...filter.standard, params] });
        }

        break;
      case 'reset':
        setFilter(initialState);
        break;
      default:
    }
  };

  const drawerContent = (
    <Stack sx={{ p: 3, pt: 0 }} spacing={0.5}>
      <ProductFilterView filter={filter} filterIsEqual={filterIsEqual} handelFilter={handelFilter} initialState={initialState} />
      <ProductFilter filter={filter} handelFilter={handelFilter} />
    </Stack>
  );

  return (
    <Drawer
      sx={{
        width: container && matchLG ? 240 : 320,
        flexShrink: 0,
        zIndex: { xs: 1200, lg: 0 },
        mr: openFilterDrawer && !matchDownLG ? 2.5 : 0,
        '& .MuiDrawer-paper': {
          height: matchDownLG ? '100%' : 'auto',
          width: container && matchLG ? 240 : 320,
          boxSizing: 'border-box',
          position: 'relative',
          boxShadow: 'none'
        }
      }}
      variant={matchDownLG ? 'temporary' : 'persistent'}
      anchor="left"
      open={openFilterDrawer}
      ModalProps={{ keepMounted: true }}
      onClose={handleDrawerOpen}
    >
      <MainCard
        title="Filter"
        sx={{ bgcolor: matchDownLG ? 'transparent' : drawerBG, borderRadius: '4px 0 0 4px', borderRight: 'none' }}
        border={!matchDownLG}
        content={false}
      >
        {matchDownLG && <SimpleBar sx={{ height: `calc(100vh - ${HEADER_HEIGHT}px)` }}>{drawerContent}</SimpleBar>}
        {!matchDownLG && drawerContent}
      </MainCard>
    </Drawer>
  );
}

ProductFilterDrawer.propTypes = {
  filter: PropTypes.any,
  initialState: PropTypes.any,
  handleDrawerOpen: PropTypes.func,
  openFilterDrawer: PropTypes.oneOfType([PropTypes.bool, PropTypes.any]),
  setFilter: PropTypes.func,
  setLoading: PropTypes.func
};
