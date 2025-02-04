import { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

// material-ui
import { useTheme } from '@mui/material/styles';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';

import OtpInput from 'react18-input-otp';
import { useHttp } from 'src/utils/api_intercepters.js';

import { ThemeMode } from 'config';

// ============================|| STATIC - CODE VERIFICATION ||============================ //

export default function AuthCodeVerification() {
  const theme = useTheme();
  const useHttpMethod = useHttp()
  const location = useLocation()
  const navigate = useNavigate()

  const mobileNumber = location.state?.mobileNumber
  const [otp, setOtp] = useState();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const borderColor = theme.palette.mode === ThemeMode.DARK ? theme.palette.secondary[200] : theme.palette.secondary.light;

  const verifyAccount = () => {
    setIsSubmitting(true)

    useHttpMethod.post('/user/verify-otp', {
      mobileNumber: mobileNumber,
      otp: otp
    }).then(res => {
      setIsSubmitting(false)

      if (res.statusCode == 200) {
        navigate("/login")
      } else {
        alert(res.message)
      }
    });
  }

  return (
    <Grid container spacing={3}>
      <Grid item xs={12}>
        <OtpInput
          value={otp}
          onChange={(otp) => setOtp(otp)}
          numInputs={6}
          containerStyle={{ justifyContent: 'space-between' }}
          inputStyle={{
            width: '100%',
            margin: '8px',
            padding: '10px',
            border: '1px solid',
            borderColor: { borderColor },
            borderRadius: 4,
            ':hover': { borderColor: theme.palette.primary.main }
          }}
          focusStyle={{
            outline: 'none',
            boxShadow: theme.customShadows.primary,
            border: '1px solid',
            borderColor: theme.palette.primary.main
          }}
        />
      </Grid>
      <Grid item xs={12}>
        <Button disableElevation disabled={isSubmitting} fullWidth size="large" type="submit" variant="contained" onClick={() => { verifyAccount() }}>
          Continue
        </Button>
      </Grid>
      <Grid item xs={12}>
        <Stack direction="row" justifyContent="space-between" alignItems="baseline">
          <Typography>Not received Code?</Typography>
          <Typography variant="body1" sx={{ minWidth: 85, ml: 2, textDecoration: 'none', cursor: 'pointer' }} color="primary">
            Resend code
          </Typography>
        </Stack>
      </Grid>
    </Grid>
  );
}
