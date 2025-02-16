import { useState } from 'react';

// material-ui
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Checkbox from '@mui/material/Checkbox';
import MenuItem from '@mui/material/MenuItem';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';

import { useHttp } from 'src/utils/api_intercepters.js';
import { isValidMobileNumber } from 'src/utils/input_validation.js';

const sizes = [
  { value: '0', label: 'Select' },
  { value: '1', label: 'NEET (Medical)' },
  { value: '2', label: 'JEE (Engineering)' },
  { value: '3', label: 'MHT-CET (Maharashtra State Exams) ' },
  { value: '4', label: 'Foundation (8th - 10th)' },
  { value: '5', label: 'Business Enquiry' },
];

// ==============================|| CONTACT US - FORM ||============================== //

export default function ContactForm() {
  const theme = useTheme();
  const useHttpMethod = useHttp()

  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    mobileNumber: null,
    goal: 0
  });

  console.log("formData", formData)

  const submitEnquiry = () => {
    if (formData?.goal == 0) {
      return alert("Please select Goal.")
    }

    if (!isValidMobileNumber(formData?.mobileNumber)) {
      return alert("Invalid mobile number. It should be 10 digits and start with 6-9.")
    }

    useHttpMethod.post("/user/enquiry", formData).then((res) => {
      if (res.statusCode == 200) {
        setFormData({
          firstName: '',
          lastName: '',
          mobileNumber: null,
          goal: 0
        })
        alert(res.message)
      } else {
        alert(res.message)
      }
    })
  }

  return (
    <Box sx={{ p: { xs: 2.5, sm: 0 }, mb: 6 }}>
      <Grid container spacing={5} justifyContent="center" >
        <Grid item xs={12} sm={10} lg={6} sx={{ pt: "0px !important" }}>
          <Grid container spacing={3} >
            <Grid item xs={12} md={6}>
              <Stack spacing={1}>
                <Typography variant="subtitle1" color="secondary">
                  First Name
                </Typography>
                <TextField fullWidth type="text" placeholder="First name" onChange={(e) => setFormData({ ...formData, firstName: e.target.value })} />
              </Stack>
            </Grid>
            <Grid item xs={12} md={6}>
              <Stack spacing={1}>
                <Typography variant="subtitle1" color="secondary">
                  Last Name
                </Typography>
                <TextField fullWidth type="text" placeholder="Last name" onChange={(e) => setFormData({ ...formData, lastName: e.target.value })} />
              </Stack>
            </Grid>

            <Grid item xs={12}>
              <Stack spacing={1}>
                <Typography variant="subtitle1" color="secondary">
                  Phone Number
                </Typography>
                <TextField fullWidth type="number" placeholder="Phone Number" onChange={(e) => setFormData({ ...formData, mobileNumber: e.target.value })} />
              </Stack>
            </Grid>
            <Grid item xs={12}>
              <Stack spacing={1}>
                <Typography variant="subtitle1" color="secondary">
                  Select Goal
                </Typography>
                <TextField select fullWidth placeholder="Company Size" value={formData?.goal} onChange={(e) => {
                  setFormData({ ...formData, goal: e.target?.value })
                }}>
                  {sizes.map((option, index) => (
                    <MenuItem key={index} value={option.value}>
                      {option.label}
                    </MenuItem>
                  ))}
                </TextField>
              </Stack>
            </Grid>
            <Grid item xs={12}>
              <Stack direction="row" alignItems="center" sx={{ ml: -1 }}>
                <Checkbox sx={{ '& .css-1vjb4cj': { borderRadius: '2px' } }} defaultChecked />
                <Typography>
                  I agree to the{' '}
                  <Typography sx={{ cursor: 'pointer' }} component="span" color={theme.palette.primary.main}>
                    Terms & Conditions
                  </Typography>
                </Typography>
              </Stack>
            </Grid>
            <Grid item xs={12}>
              <Stack direction="row" alignItems="center" sx={{ ml: -1 }}>
                <Checkbox sx={{ '& .css-1vjb4cj': { borderRadius: '2px' } }} defaultChecked />
                <Typography>
                  I agree to be contacted by Drcshala via Phone/SMS, & other channels.{' '}
                </Typography>
              </Stack>
            </Grid>
            <Grid item xs={12}>
              <Button variant="contained" fullWidth onClick={() => {
                submitEnquiry()
              }}>
                Submit
              </Button>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Box>
  );
}
