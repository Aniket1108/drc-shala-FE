import { Link } from 'react-router-dom';

// material-ui
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';

// project-imports
import AuthWrapper from 'sections/auth/AuthWrapper';

// ================================|| CHECK MAIL ||================================ //

export default function CheckMail() {

  return (
    <AuthWrapper>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <Box sx={{ mb: { xs: -0.5, sm: 0.5 } }}>
            <Typography variant="h3">Hi, Check Your Mail</Typography>
            <Typography color="secondary" sx={{ mb: 0.5, mt: 1.25 }}>
              We have sent a password recover instructions to your email.
            </Typography>
          </Box>
        </Grid>
        <Grid item xs={12}>
          <Button
            component={Link}
            to='/login'
            disableElevation
            fullWidth
            size="large"
            type="submit"
            variant="contained"
            color="primary"
          >
            Sign in
          </Button>
        </Grid>
      </Grid>
    </AuthWrapper>
  );
}
