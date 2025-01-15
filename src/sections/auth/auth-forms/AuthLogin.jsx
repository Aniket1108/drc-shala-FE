import PropTypes from 'prop-types';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Link as RouterLink } from 'react-router-dom';

// material-ui
import Button from '@mui/material/Button';
import Checkbox from '@mui/material/Checkbox';
import FormControlLabel from '@mui/material/FormControlLabel';
import Grid from '@mui/material/Grid';
import InputAdornment from '@mui/material/InputAdornment';
import InputLabel from '@mui/material/InputLabel';
import Link from '@mui/material/Link';
import OutlinedInput from '@mui/material/OutlinedInput';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';

// third-party

// project-imports
import IconButton from 'components/@extended/IconButton';

// assets
import { Eye, EyeSlash } from 'iconsax-react';

import { useHttp } from 'src/utils/api_intercepters.js';

// ============================|| JWT - LOGIN ||============================ //

export default function AuthLogin({ forgot }) {
  const useHttpMethod = useHttp()
  const navigate = useNavigate()

  const [checked, setChecked] = useState(false);
  const [values, setValues] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const [showPassword, setShowPassword] = useState(false);
  const handleClickShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  const login = () => {
    setIsSubmitting(true)
    useHttpMethod.post('/user/login', {
      mobileNumber: values.mobileNumber,
      password: values.password
    }).then(res => {
      setIsSubmitting(false)
      if (res.statusCode == 200) {
        navigate("/sample-page")
      }
    });
  }

  return (
    <>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <Stack spacing={1}>
            <InputLabel htmlFor="mobile-number">Mobile Number</InputLabel>
            <OutlinedInput
              id="mobile-number"
              value={values?.mobileNumber}
              onChange={(event) => { setValues({ ...values, mobileNumber: event.target.value }) }}
              placeholder="Enter mobile number"
              fullWidth
            />
          </Stack>
        </Grid>

        <Grid item xs={12}>
          <Stack spacing={1}>
            <InputLabel htmlFor="password-login">Password</InputLabel>
            <OutlinedInput
              fullWidth
              id="-password-login"
              type={showPassword ? 'text' : 'password'}
              value={values?.password}
              name="password"
              onChange={(event) => { setValues({ ...values, password: event.target.value }) }}
              endAdornment={
                <InputAdornment position="end">
                  <IconButton
                    aria-label="toggle password visibility"
                    onClick={handleClickShowPassword}
                    onMouseDown={handleMouseDownPassword}
                    edge="end"
                    color="secondary"
                  >
                    {showPassword ? <Eye /> : <EyeSlash />}
                  </IconButton>
                </InputAdornment>
              }
              placeholder="Enter password"
            />
          </Stack>
        </Grid>

        <Grid item xs={12} sx={{ mt: -1 }}>
          <Stack direction="row" justifyContent="space-between" alignItems="center" spacing={2}>
            <FormControlLabel
              control={
                <Checkbox
                  checked={checked}
                  onChange={(event) => setChecked(event.target.checked)}
                  name="checked"
                  color="primary"
                  size="small"
                />
              }
              label={<Typography variant="h6">Keep me sign in</Typography>}
            />

            <Link variant="h6" component={RouterLink} to='/forgot-password' color="text.primary">
              Forgot Password?
            </Link>
          </Stack>
        </Grid>

        <Grid item xs={12}>
          <Button
            disableElevation
            disabled={isSubmitting}
            fullWidth size="large"
            variant="contained"
            color="primary"
            onClick={() => {
              login()
            }}
          >
            Login
          </Button>
        </Grid>
      </Grid>
    </>
  );
}

AuthLogin.propTypes = { forgot: PropTypes.string };
