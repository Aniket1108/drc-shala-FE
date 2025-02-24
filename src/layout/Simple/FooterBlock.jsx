import { useNavigate } from 'react-router-dom';

import PropTypes from 'prop-types';
// material-ui
import { styled, useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Link from '@mui/material/Link';
import Stack from '@mui/material/Stack';
import Tooltip from '@mui/material/Tooltip';
import Typography from '@mui/material/Typography';

// project-imports
import Logo from 'components/logo';

// assets
import { Facebook, Twitter, Instagram, LinkedIn } from '@mui/icons-material'; // Use Material UI icons for simplicity

// link - custom style
const FooterLink = styled(Link)(({ theme }) => ({
  color: theme.palette.text.primary,
  '&:hover, &:active': {
    color: theme.palette.primary.main
  }
}));

// ==============================|| FOOTER - DRC SHALA ||============================== //

export default function FooterBlock({ isFull }) {
  const theme = useTheme();
  const navigate = useNavigate();

  const linkSX = {
    color: theme.palette.text.secondary,
    fontWeight: 400,
    opacity: '0.6',
    cursor: 'pointer',
    '&:hover': {
      opacity: '1'
    }
  };

  return (
    <>
      <Box sx={{ pt: isFull ? 5 : 10, pb: 10, bgcolor: 'secondary.200', borderTop: `1px solid ${theme.palette.divider}` }}>
        <Container>
          <Grid container spacing={2}>
            <Grid item xs={12} md={4}>
              <div
                initial={{ opacity: 0, translateY: 550 }}
                animate={{ opacity: 1, translateY: 0 }}
                transition={{
                  type: 'spring',
                  stiffness: 150,
                  damping: 30
                }}
              >
                <Grid container spacing={2}>
                  <Grid item xs={12}>
                    <Logo to="/" />
                  </Grid>
                  <Grid item xs={12}>
                    <Typography variant="subtitle1" sx={{ fontWeight: 400, maxWidth: 320 }}>
                      Drcshala is your trusted partner in preparing for competitive exams like NEET, JEE, MHT-CET, and more.
                      We offer expert-curated courses and advanced tools to track your progress.
                    </Typography>
                  </Grid>
                </Grid>
              </div>
            </Grid>
            <Grid item xs={12} md={8}>
              <Grid container spacing={{ xs: 5, md: 2 }}>
                <Grid item xs={6} sm={4}>
                  <Stack spacing={3}>
                    <Typography variant="h5">Company</Typography>
                    <Stack spacing={{ xs: 1.5, md: 2.5 }}>
                      <Typography sx={{ cursor: "pointer" }} onClick={() => { navigate("/about-us") }} >
                        About Us
                      </Typography>
                      <Typography sx={{ cursor: "pointer" }} onClick={() => { navigate("/contact-us") }} >
                        Contact Us
                      </Typography>
                    </Stack>
                  </Stack>
                </Grid>
                <Grid item xs={6} sm={4}>
                  <Stack spacing={3}>
                    <Typography variant="h5">Resources</Typography>
                    <Stack spacing={{ xs: 1.5, md: 2.5 }}>
                      <Typography sx={{ cursor: "pointer" }} onClick={() => { navigate("/courses") }} >
                        Courses
                      </Typography>
                      <Typography sx={{ cursor: "pointer" }} onClick={() => { navigate("/test-series") }} >
                        Test Series
                      </Typography>
                      <Typography sx={{ cursor: "pointer", opacity: "0.5" }} >
                        Study Materials
                      </Typography>
                    </Stack>
                  </Stack>
                </Grid>
                <Grid item xs={6} sm={4}>
                  <Stack spacing={3}>
                    <Typography variant="h5">Help & Support</Typography>
                    <Stack spacing={{ xs: 1.5, md: 2.5 }}>
                      <FooterLink href="/terms-and-conditions" target="_blank" underline="none">
                        Terms & Conditions
                      </FooterLink>
                      <FooterLink href="/refund-policy" target="_blank" underline="none">
                        Refund policy
                      </FooterLink>
                      <FooterLink href="/privacy-policy" target="_blank" underline="none">
                        Privacy Policy
                      </FooterLink>
                    </Stack>
                  </Stack>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Container>
      </Box>
      <Box sx={{ py: 2.4, borderTop: `1px solid ${theme.palette.divider}`, bgcolor: 'secondary.200' }}>
        <Container>
          <Grid container spacing={2} alignItems="center">
            <Grid item xs={12} sm={8}>
              <Typography>
                © {new Date().getFullYear()} Drcshala. All Rights Reserved.
              </Typography>
            </Grid>
            <Grid item xs={12} sm={4}>
              <Grid container spacing={2} alignItems="center" sx={{ justifyContent: 'flex-end' }}>
                {/* <Grid item>
                  <Tooltip title="LinkedIn">
                    <Link href="https://www.linkedin.com/company/drcshala" underline="none" target="_blank" sx={linkSX}>
                      <LinkedIn sx={{ fontSize: 24 }} />
                    </Link>
                  </Tooltip>
                </Grid> */}
                <Grid item>
                  <Tooltip title="Twitter">
                    <Link href="https://x.com/drcshala" underline="none" target="_blank" sx={linkSX}>
                      <Twitter sx={{ fontSize: 24 }} />
                    </Link>
                  </Tooltip>
                </Grid>
                <Grid item>
                  <Tooltip title="Facebook">
                    <Link href="https://www.facebook.com/share/1EQhDDNib7/" underline="none" target="_blank" sx={linkSX}>
                      <Facebook sx={{ fontSize: 24 }} />
                    </Link>
                  </Tooltip>
                </Grid>
                <Grid item>
                  <Tooltip title="Instagram">
                    <Link href="https://www.instagram.com/drcshala" underline="none" target="_blank" sx={linkSX}>
                      <Instagram sx={{ fontSize: 24 }} />
                    </Link>
                  </Tooltip>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Container>
      </Box>
    </>
  );
}

FooterBlock.propTypes = { isFull: PropTypes.bool };
