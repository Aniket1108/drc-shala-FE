import { Box, Typography, Stack } from '@mui/material';
import { BookSquare } from 'iconsax-react';

export default function HeroTitle() {
    return (
        <Box>
            <Stack direction="row" spacing={1} alignItems="center" mb={2}>
                <BookSquare /> 
                <Typography
                    variant="overline"
                    sx={{
                        fontWeight: 600,
                        letterSpacing: 3,
                        fontSize: '1rem',
                        color: 'primary.main'
                    }}
                >
                    DRC SHALA
                </Typography>
            </Stack>

            <Typography
                variant="h1"
                sx={{
                    fontSize: { xs: '1.825rem', sm: '2rem', md: '3.4375rem' },
                    fontWeight: 700,
                    lineHeight: 1.2,
                    mb: 3
                }}
            >
                <Typography
                    variant="h1"
                    component="span"
                    sx={{
                        fontSize: 'inherit',
                        background: 'linear-gradient(90deg, rgb(37, 161, 244), rgb(249, 31, 169), rgb(37, 161, 244)) 0 0 / 400% 100%',
                        color: 'transparent',
                        WebkitBackgroundClip: 'text',
                        backgroundClip: 'text',
                        animation: 'move-bg 24s infinite linear',
                        '@keyframes move-bg': { '100%': { backgroundPosition: '400% 0' } }
                    }}
                >
                    Learn, Achived, Succeed
                </Typography>{' '}
                - with best in the business
            </Typography>

            <Typography
                variant="h6"
                sx={{
                    color: 'text.secondary',
                    fontWeight: 400,
                    mb: 4,
                    maxWidth: '90%'
                }}
            >
                Join India's leading educational platform for NEET, JEE & Foundation courses. Experience personalized learning like never before.
            </Typography>
        </Box>
    );
}