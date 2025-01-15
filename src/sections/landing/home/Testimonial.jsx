import PropTypes from 'prop-types';
// material-ui
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';

// third party
import { motion } from 'framer-motion';
import Marquee from 'react-fast-marquee';

// project-imports
import FadeInWhenVisible from './Animation';
import MainCard from 'components/MainCard';
import { ThemeDirection } from 'config';

// assets
import Avatar from 'components/@extended/Avatar';
import Avatar1 from 'assets/images/users/avatar-6.png';
import Avatar2 from 'assets/images/users/avatar-1.png';
import Avatar3 from 'assets/images/users/avatar-2.png';
import Avatar4 from 'assets/images/users/avatar-3.png';
import Avatar5 from 'assets/images/users/avatar-4.png';
import Avatar6 from 'assets/images/users/avatar-5.png';
import Avatar7 from 'assets/images/users/avatar-7.png';
import Avatar8 from 'assets/images/users/avatar-8.png';

// ================================|| SLIDER - ITEMS ||================================ //

function Item({ item }) {
  return (
    <MainCard sx={{ width: { xs: '300px', md: '420px' }, cursor: 'pointer', my: 0.2, mx: 1.5 }}>
      <Stack direction="row" alignItems="flex-start" spacing={2}>
        <Avatar alt="Avatar" size="lg" src={item.image}></Avatar>
        <Stack>
          <Typography>{item.text}</Typography>
          <Typography>
            <Typography component="span" variant="caption">
              {item.name}
            </Typography>
            {' - '}
            <Typography component="span" color="text.secondary">
              {item.designation}
            </Typography>
          </Typography>
        </Stack>
      </Stack>
    </MainCard>
  );
}

// ==============================|| LANDING - TestimonialPage ||============================== //

export default function TestimonialPage() {
  const theme = useTheme();
  const items = [
    {
      image: Avatar3,
      text: '“The weekly Online practice tests were a great way to get familiar with the actual JEE exam and build my confidence. 😍“',
      name: 'Shreya',
      designation: 'Test Series'
    },
    {
      image: Avatar4,
      text: '“My experience with the Drcshala JEE course was fantastic! The course offers high-quality video lectures, well-designed study materials, DPPs, and a test series, making it stand out from other programs.“',
      name: 'Aaradhya',
      designation: 'Courses and Study Materials'
    },
    {
      image: Avatar7,
      text: '“I enrolled in Drcshala’s online MHT-CET preparation course, and it was a wonderful experience. 😍 “',
      name: 'Sagar',
      designation: 'MHT-CET'
    }
  ];
  return (
    <>
      <Box sx={{ mt: { md: 15, xs: 2.5 } }}>
        <Container>
          <Grid container spacing={2} justifyContent="center" sx={{ textAlign: 'center', marginBottom: 4 }}>
            <Grid item xs={12}>
              <motion.div
                initial={{ opacity: 0, translateY: 550 }}
                animate={{ opacity: 1, translateY: 0 }}
                transition={{
                  type: 'spring',
                  stiffness: 150,
                  damping: 30,
                  delay: 0.2
                }}
              >
                <Typography variant="h2">
                  They{' '}
                  <Typography variant="h2" component="span" sx={{ color: theme.palette.primary.main }}>
                    love
                  </Typography>{' '}
                  Drcshala, Now your turn 😍
                </Typography>
              </motion.div>
            </Grid>
            <Grid item xs={12} md={7}>
              <motion.div
                initial={{ opacity: 0, translateY: 550 }}
                animate={{ opacity: 1, translateY: 0 }}
                transition={{
                  type: 'spring',
                  stiffness: 150,
                  damping: 30,
                  delay: 0.4
                }}
              >
                <Typography>
                  Some text.
                </Typography>
              </motion.div>
            </Grid>
          </Grid>
        </Container>
      </Box>
      <Box sx={{ mb: { md: 10, xs: 2.5 } }}>
        <Grid container spacing={4}>
          <Grid item xs={12} sx={{ direction: theme.direction }}>
            <FadeInWhenVisible>
              <Marquee pauseOnHover direction={theme.direction === ThemeDirection.RTL ? 'right' : 'left'} gradient={false}>
                {items.map((item, index) => (
                  <Item key={index} item={item} />
                ))}
              </Marquee>
            </FadeInWhenVisible>
          </Grid>
          {/* <Grid item xs={12} sx={{ direction: theme.direction }}>
            <FadeInWhenVisible>
              <Marquee pauseOnHover direction={theme.direction === ThemeDirection.RTL ? 'left' : 'right'} gradient={false}>
                {items.map((item, index) => (
                  <Item key={index} item={item} />
                ))}
              </Marquee>
            </FadeInWhenVisible>
          </Grid> */}
        </Grid>
      </Box>
    </>
  );
}

Item.propTypes = { item: PropTypes.object };
