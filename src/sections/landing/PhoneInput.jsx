import { useState } from 'react';
import { Box, TextField, Button, InputAdornment, Stack } from '@mui/material';
// import PhoneIcon from '@mui/icons-material/Phone';
// import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import { DocumentDownload, ExportSquare, HambergerMenu, Minus, CallCalling } from 'iconsax-react';


export default function PhoneInput() {
    const [phone, setPhone] = useState('');

    return (
        <Box
            sx={{
                position: 'relative',
                maxWidth: 350,
                '&::before': {
                    content: '""',
                    position: 'absolute',
                    inset: -2,
                    // background: 'linear-gradient(90deg, rgb(37, 161, 244), rgb(249, 31, 169))',
                    borderRadius: 3,
                    padding: '1px',
                    WebkitMask: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)',
                    WebkitMaskComposite: 'xor',
                    maskComposite: 'exclude',
                }
            }}
        >
            <Stack
                direction={{ xs: 'column', sm: 'row' }}
                spacing={2}
                sx={{
                    p: 0.5,
                    borderRadius: 2,
                    backgroundColor: 'white',
                }}
            >
                <TextField
                    size='small'
                    fullWidth
                    placeholder="Enter your phone number"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    sx={{
                        '& .MuiOutlinedInput-root': {
                            backgroundColor: '#f8f9ff',
                            '&:hover fieldset': {
                                borderColor: 'primary.main',
                            },
                        },
                    }}
                />
                <Button
                    variant="contained"
                    size="small"
                    // endIcon={<ArrowForwardIcon />}
                    sx={{
                        px: 4,
                        background: 'linear-gradient(90deg, rgb(37, 161, 244), rgb(249, 31, 169))',
                        boxShadow: '0 4px 14px rgba(37, 161, 244, 0.25)',
                        whiteSpace: 'nowrap',
                        '&:hover': {
                            background: 'linear-gradient(90deg, rgb(37, 161, 244), rgb(249, 31, 169))',
                            transform: 'translateY(-2px)',
                            boxShadow: '0 6px 20px rgba(37, 161, 244, 0.3)',
                        },
                        transition: 'all 0.3s ease'
                    }}
                >
                    Get Started
                </Button>
            </Stack>
        </Box>
    );
}