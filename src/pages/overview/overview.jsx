import { Box, Typography } from '@mui/material';

export default function Overview() {
  return (
    <>
      <Box sx={{
        p: 2,
        mb: 2,
        border: '1px solid divider',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between'
      }}>
        <Typography>
          Overview
        </Typography>

      </Box>
    </>
  );
}
