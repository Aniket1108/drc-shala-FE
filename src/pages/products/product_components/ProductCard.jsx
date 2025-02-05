import PropTypes from 'prop-types';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

// material-ui
import { List, ListItem, Typography } from '@mui/material';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Divider from '@mui/material/Divider';
import Stack from '@mui/material/Stack';
import { useTheme } from '@mui/material/styles';

// project-imports
import MainCard from 'components/MainCard';
import SkeletonProductPlaceholder from './ProductPlaceholder';

import { openSnackbar } from 'api/snackbar';

// assets

// ==============================|| PRODUCT CARD ||============================== //

export default function ProductCard({ id, name, salePrice, offerPrice, type, features, standard, stream, isUser }) {
  const theme = useTheme();
  const navigate = useNavigate();
  const [wishlisted, setWishlisted] = useState(false);

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
        <List sx={{ listStyleType: 'disc', pl: 2 }}>
          {features?.map((item, index) => (
            <ListItem key={index} sx={{ display: 'list-item', pl: 0, paddingTop: '0px !important', paddingBottom: '0px !important' }}>
              <Typography>{item}</Typography>
            </ListItem>
          ))}
        </List>
      </Box>

      <Divider />

      <Stack direction="row" justifyContent="space-between" alignItems="center" sx={{
        mt: "10px"
      }}>
        <Box>
          <Typography variant="body2" sx={{ textDecoration: "line-through" }}>₹{salePrice}</Typography>
          <Typography variant="h5">₹{offerPrice}</Typography>
        </Box>

        <Button variant="contained" sx={{ ml: "5px" }} onClick={() => {
          navigate(
            isUser
              ?
              ("/products" + "/" + type?.toLowerCase() + "/" + stream?.toLowerCase())
              :
              ("/" + type?.toLowerCase() + "/" + stream?.toLowerCase()))
        }}>
          View Details
        </Button>

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
