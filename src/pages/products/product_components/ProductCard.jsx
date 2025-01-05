import PropTypes from 'prop-types';
import { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

// material-ui
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import Chip from '@mui/material/Chip';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Divider from '@mui/material/Divider';
import Rating from '@mui/material/Rating';
import Stack from '@mui/material/Stack';
import { Typography } from '@mui/material';

// project-imports
import MainCard from 'components/MainCard';
import IconButton from 'components/@extended/IconButton';
import SkeletonProductPlaceholder from './ProductPlaceholder';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

import { openSnackbar } from 'api/snackbar';
import { ImagePath, getImageUrl } from 'utils/getImageUrl';

// assets
import { Heart } from 'iconsax-react';

// ==============================|| PRODUCT CARD ||============================== //

export default function ProductCard({ id, name, image, salePrice, offerPrice, type, features, standard, course }) {
  const theme = useTheme();
  const navigate = useNavigate();
  const [wishlisted, setWishlisted] = useState(false);

  const addToFavourite = () => {
    setWishlisted(!wishlisted);
    openSnackbar({
      open: true,
      message: 'Added to favourites',
      variant: 'alert',

      alert: {
        color: 'success'
      }
    });
  };

  const [loading, setLoading] = useState(true);
  useEffect(() => {
    setLoading(false);
  }, []);

  if (loading) return <SkeletonProductPlaceholder />;

  return (
    <MainCard
      content={false}
      sx={{
        '&:hover': {
          transform: 'scale3d(1.02, 1.02, 1)',
          transition: 'all .4s ease-in-out'
        },
        height: "280px",
        display: "flex",
        flexDirection: "column",
        padding: "15px"
      }}
    >
      <Stack>
        <Typography
          color="text.primary"
          variant="h5"
          sx={{ overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap', display: 'block', textDecoration: 'none' }}
        >
          {name}
        </Typography>
        <Typography variant="h6" color="text.secondary">
          Standard - {standard}
        </Typography>
      </Stack>

      <Divider />

      <Box sx={{ width: 250, m: 'auto' }}>
        {
          features?.map((item) => {
            return (
              <Typography>{item}</Typography>
            )
          })
        }
      </Box>

      <Divider />

      <Stack direction="row" justifyContent="space-between" alignItems="center" sx={{
        mt: "10px"
      }}>
        <Box>
          <Typography variant="body" sx={{ textDecoration: "line-through" }}>₹{salePrice}</Typography>
          <Typography variant="h5">₹{offerPrice}</Typography>
        </Box>

        <Box>
          <Button variant='outlined'>
            <ShoppingCartIcon />
          </Button>

          <Button variant="contained" sx={{ ml: "5px" }} onClick={() => {
            navigate(type + "/" + course)
          }}>
            View Details
          </Button>
        </Box>
      </Stack>
    </MainCard>
  );
}

ProductCard.propTypes = {
  id: PropTypes.any,
  image: PropTypes.any,
  name: PropTypes.any,
  brand: PropTypes.any,
  offerPrice: PropTypes.any
};
