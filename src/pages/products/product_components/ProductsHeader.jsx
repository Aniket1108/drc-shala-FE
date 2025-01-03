import PropTypes from 'prop-types';
import { useState } from 'react';

// material-ui
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
import Menu from '@mui/material/Menu';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import MenuItem from '@mui/material/MenuItem';
import TextField from '@mui/material/TextField';
import InputAdornment from '@mui/material/InputAdornment';

// project-imports
// import SortOptions from 'sections/apps/e-commerce/products/SortOptions';
import MainCard from 'components/MainCard';

// assets
import { ArrowDown2, FilterSearch, SearchNormal1 } from 'iconsax-react';

// ==============================|| PRODUCT - HEADER ||============================== //

export default function ProductsHeader({ filter, handleDrawerOpen, setFilter }) {
  const theme = useTheme();
  const matchDownSM = useMediaQuery(theme.breakpoints.down('sm'));

  return (
    <MainCard content={false}>
      <Stack
        direction={matchDownSM ? 'column' : 'row'}
        alignItems={matchDownSM ? 'space-between' : 'center'}
        justifyContent={matchDownSM ? 'center' : 'space-between'}
        sx={{ p: 2 }}
        spacing={2}
      >
        <Stack direction="row" alignItems="center" justifyContent="space-between" spacing={0.5}>
          <Button onClick={handleDrawerOpen} color="secondary" startIcon={<FilterSearch style={{ color: 'secondary.200' }} />} size="large">
            Filter
          </Button>
        </Stack>
      </Stack>
    </MainCard>
  );
}

ProductsHeader.propTypes = { filter: PropTypes.any, handleDrawerOpen: PropTypes.func, setFilter: PropTypes.func };
