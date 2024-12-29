import PropTypes from 'prop-types';
import { cloneElement, useState } from 'react';
import { Link as RouterLink, useNavigate } from 'react-router-dom';

// material-ui
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Chip from '@mui/material/Chip';
import Container from '@mui/material/Container';
import Drawer from '@mui/material/Drawer';
import Link from '@mui/material/Link';
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Stack from '@mui/material/Stack';
import { alpha, useTheme } from '@mui/material/styles';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import useMediaQuery from '@mui/material/useMediaQuery';
import useScrollTrigger from '@mui/material/useScrollTrigger';
import Popover from '@mui/material/Popover';


// project-imports
import { handlerComponentDrawer, useGetMenuMaster } from 'api/menu';
import IconButton from 'components/@extended/IconButton';
import Logo from 'components/logo';
import { APP_DEFAULT_PATH, ThemeDirection } from 'config';
import Courses from './Header/Courses';
import TestSeries from './Header/TestSeries';
import StudyMaterial from './Header/StudyMaterial';

// assets
import { DocumentDownload, ExportSquare, HambergerMenu, Minus, CallCalling } from 'iconsax-react';

// elevation scroll
function ElevationScroll({ children, window }) {
  const theme = useTheme();
  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 10,
    target: window ? window : undefined
  });

  return cloneElement(children, {
    style: {
      boxShadow: trigger ? '0 8px 6px -10px rgba(0, 0, 0, 0.5)' : 'none',
      backgroundColor: trigger ? alpha(theme.palette.background.default, 0.8) : alpha(theme.palette.background.default, 0.1)
    }
  });
}

// ==============================|| COMPONENTS - APP BAR ||============================== //

export default function Header({ layout = 'landing', ...others }) {
  const theme = useTheme();
  const navigate = useNavigate();
  const matchDownMd = useMediaQuery(theme.breakpoints.down('md'));
  const [drawerToggle, setDrawerToggle] = useState(false);

  const { menuMaster } = useGetMenuMaster();

  /** Method called on multiple components with different event types */
  const drawerToggler = (open) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }
    setDrawerToggle(open);
  };

  return (
    <ElevationScroll layout={layout} {...others}>
      <AppBar
        sx={{
          bgcolor: alpha(theme.palette.background.default, 0.1),
          backdropFilter: 'blur(8px)',
          color: theme.palette.text.primary,
          boxShadow: 'none'
        }}
      >
        <Container maxWidth="xl" disableGutters={matchDownMd}>
          <Toolbar sx={{ px: { xs: 1.5, sm: 4, md: 0, lg: 0 }, py: 1 }}>
            <Stack direction="row" sx={{ flexGrow: 1, display: { xs: 'none', md: 'block' } }} alignItems="center">
              <Typography sx={{ textAlign: 'left', display: 'inline-block' }}>
                <Logo to="/" />
              </Typography>
              <Chip
                label={"Development"}
                variant="outlined"
                size="small"
                color="secondary"
                sx={{ mt: 0.5, ml: 1, fontSize: '0.725rem', height: 20, '& .MuiChip-label': { px: 0.5 } }}
              />
            </Stack>

            <Stack
              direction="row"
              sx={{
                '& .header-link': { fontWeight: 500, '&:hover': { color: 'primary.main' } },
                display: { xs: 'none', md: 'block' }
              }}
              spacing={3}
            >
              <Box sx={{ display: "flex", alignItems: "center" }}>

                <Courses />
                <TestSeries />
                <StudyMaterial />
                <Typography
                  sx={{
                    cursor: "pointer"
                  }}
                >
                  About Us
                </Typography>

                <Button
                  startIcon={<CallCalling />}
                  size="small"
                  variant="outlined"
                  sx={{ ml: 2 }}
                  onClick={() => {
                    navigate("/contact-us")
                  }}
                >
                  Contact us
                </Button>

                <Button
                  startIcon={<ExportSquare />}
                  size="small"
                  variant="contained"
                  sx={{ ml: 1 }}
                >
                  Login
                </Button>

              </Box>
            </Stack>

            <Box
              sx={{
                width: '100%',
                alignItems: 'center',
                justifyContent: 'space-between',
                display: { xs: 'flex', md: 'none' }
              }}
            >
              <Typography sx={{ textAlign: 'left', display: 'inline-block' }}>
                <Logo to="/" />
              </Typography>

              <Stack direction="row" spacing={2}>
                {layout === 'component' && (
                  <Button variant="outlined" color="warning" component={RouterLink} to={APP_DEFAULT_PATH} sx={{ mt: 0.25 }}>
                    Dashboard
                  </Button>
                )}
                {layout !== 'component' && (
                  <Box sx={{ display: "flex", alignItems: "center" }}>
                    <CallCalling size="28" />
                    <Button variant='contained' sx={{ ml: 3 }}>Login</Button>
                  </Box>
                )}

                <IconButton
                  size="large"
                  color="secondary"
                  {...(layout === 'component'
                    ? { onClick: () => handlerComponentDrawer(!menuMaster.isComponentDrawerOpened) }
                    : { onClick: drawerToggler(true) })}
                  sx={{ p: 1 }}
                >
                  <HambergerMenu />
                </IconButton>
              </Stack>

              <Drawer
                anchor="right"
                open={drawerToggle}
                onClose={drawerToggler(false)}
                sx={{ '& .MuiDrawer-paper': { backgroundImage: 'none' } }}
              >
                <Box
                  sx={{
                    width: 'auto',
                    '& .MuiListItemIcon-root': {
                      fontSize: '1rem',
                      minWidth: 32
                    }
                  }}
                  role="presentation"
                  onClick={drawerToggler(false)}
                  onKeyDown={drawerToggler(false)}
                >

                </Box>
              </Drawer>
            </Box>

          </Toolbar>
        </Container>
      </AppBar>
    </ElevationScroll>
  );
}

ElevationScroll.propTypes = { children: PropTypes.node, window: PropTypes.any };
Header.propTypes = { layout: PropTypes.string, others: PropTypes.any };
