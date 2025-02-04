import { useEffect, useState } from 'react';
import { Link as RouterLink, useNavigate } from 'react-router-dom';

// material-ui
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import FormControl from '@mui/material/FormControl';
import Grid from '@mui/material/Grid';
import InputAdornment from '@mui/material/InputAdornment';
import InputLabel from '@mui/material/InputLabel';
import Link from '@mui/material/Link';
import OutlinedInput from '@mui/material/OutlinedInput';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';

import { strengthColor, strengthIndicator } from 'utils/password-strength';
import IconButton from 'components/@extended/IconButton';
import { Eye, EyeSlash } from 'iconsax-react';
import { useHttp } from 'src/utils/api_intercepters.js';

// ============================|| JWT - REGISTER ||============================ //

export default function AuthRegister() {
  const navigate = useNavigate();
  const useHttpMethod = useHttp()

  const [level, setLevel] = useState();
  const [values, setValues] = useState({
    firstName: "",
    lastName: "",
    mobileNumber: "",
    password: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  const handleClickShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  const changePassword = (value) => {
    const temp = strengthIndicator(value);
    setLevel(strengthColor(temp));
  };

  useEffect(() => {
    changePassword('');
  }, []);

  const handleChange = (key, e) => {
    const value = e.target.value;
    setValues({ ...values, [key]: value })
  }

  const register = () => {
    setIsSubmitting(true)

    useHttpMethod.post('/user/resister', {
      firstName: values.firstName,
      lastName: values.lastName,
      mobileNumber: values.mobileNumber,
      password: values.password
    }).then(res => {
      setIsSubmitting(false)

      if (res.statusCode == 200) {
        localStorage.setItem("token", res.data.token)
        localStorage.setItem("userData", JSON.stringify(res.data))

        navigate("/code-verification", { state: { mobileNumber: values.mobileNumber } })
      } else {
        alert(res.message)
      }
    });
  }

  return (
    <>

      <Grid container spacing={3}>
        <Grid item xs={12} md={6}>
          <Stack spacing={1}>
            <InputLabel htmlFor="firstname-signup">First Name*</InputLabel>
            <OutlinedInput
              id="firstname-login"
              type="firstname"
              value={values.firstName}
              name="firstname"
              onChange={(e) => { handleChange("firstName", e) }}
              placeholder="John"
              fullWidth
            />
          </Stack>

        </Grid>
        <Grid item xs={12} md={6}>
          <Stack spacing={1}>
            <InputLabel htmlFor="lastname-signup">Last Name*</InputLabel>
            <OutlinedInput
              fullWidth
              id="lastname-signup"
              type="lastname"
              value={values.lastName}
              name="lastname"
              onChange={(e) => { handleChange("lastName", e) }}
              placeholder="Doe"
            />
          </Stack>

        </Grid>
        <Grid item xs={12}>
          <Stack spacing={1}>
            <InputLabel htmlFor="mobile-signup">Mobile Number *</InputLabel>
            <OutlinedInput
              fullWidth
              id="mobile-login"
              type="number"
              value={values.mobileNumber}
              name="mobile"
              onChange={(e) => { handleChange("mobileNumber", e) }}
              placeholder="0123456789"
            />
          </Stack>
        </Grid>
        <Grid item xs={12}>
          <Stack spacing={1}>
            <InputLabel htmlFor="password-signup">Password</InputLabel>
            <OutlinedInput
              fullWidth
              id="password-signup"
              type={showPassword ? 'text' : 'password'}
              value={values.password}
              name="password"
              onChange={(e) => {
                handleChange("password", e)
                changePassword(e.target.value);
              }}
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
              placeholder="******"
            />
          </Stack>

          <FormControl fullWidth sx={{ mt: 2 }}>
            <Grid container spacing={2} alignItems="center">
              <Grid item>
                <Box sx={{ bgcolor: level?.color, width: 85, height: 8, borderRadius: '7px' }} />
              </Grid>
              <Grid item>
                <Typography variant="subtitle1" fontSize="0.75rem">
                  {level?.label}
                </Typography>
              </Grid>
            </Grid>
          </FormControl>
        </Grid>
        <Grid item xs={12}>
          <Typography variant="body2">
            By Signing up, you agree to our &nbsp;
            <Link variant="subtitle2" component={RouterLink} to="#">
              Terms of Service
            </Link>
            &nbsp; and &nbsp;
            <Link variant="subtitle2" component={RouterLink} to="#">
              Privacy Policy
            </Link>
          </Typography>
        </Grid>
        <Grid item xs={12}>
          <Button disableElevation disabled={isSubmitting} fullWidth size="large" type="submit" variant="contained" color="primary" onClick={() => { register() }}>
            Create Account
          </Button>
        </Grid>
      </Grid>
    </>
  );
}
