import { useState } from 'react';
import { Link as RouterLink } from 'react-router-dom';

// material-ui
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import Link from '@mui/material/Link';
import Rating from '@mui/material/Rating';
import Tooltip from '@mui/material/Tooltip';
import Container from '@mui/material/Container';
import CardMedia from '@mui/material/CardMedia';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Menu from '@mui/material/Menu';
import Typography from '@mui/material/Typography';

import HeroTitle from './HeroTitle';
import PhoneInput from './PhoneInput';
import HeroIllustration from './HeroIllustration';



// ==============================|| LANDING - HERO PAGE ||============================== //

export default function HeroPage() {
  const theme = useTheme();

  return (
    <Box
      sx={{
        marginTop: "180px",
        marginBottom: "100px",
        display: 'flex',
        alignItems: 'center',
        position: 'relative',
        overflow: 'hidden',
        pt: { xs: 8, md: 0 }, // Add padding top for mobile to account for navbar
        '&::before': {
          content: '""',
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          zIndex: 0
        }
      }}
    >
      <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 1 }}>
        <Grid
          container
          spacing={4}
          alignItems="center"
          sx={{
            flexDirection: { xs: 'column-reverse', md: 'row' }
          }}
        >
          <Grid item xs={12} md={6}>
            <HeroTitle />
            <PhoneInput />
          </Grid>
          <Grid item xs={12} md={6}>
            <HeroIllustration />
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}
