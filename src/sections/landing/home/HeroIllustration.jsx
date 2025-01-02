import { Box } from '@mui/material';
import Hero1 from 'assets/images/landing/hero1.png'

export default function HeroIllustration() {
    return (
        <Box
            sx={{
                position: 'relative',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                '&::before': {
                    content: '""',
                    position: 'absolute',
                    width: '80%',
                    height: '80%',
                    background: 'radial-gradient(circle, rgba(37, 161, 244, 0.1) 0%, transparent 70%)',
                    borderRadius: '50%',
                    top: '50%',
                    left: '50%',
                    transform: 'translate(-50%, -50%)',
                    zIndex: 0
                },
                '& img': {
                    width: '100%',
                    height: 'auto',
                    maxWidth: 600,
                    position: 'relative',
                    zIndex: 1,
                    animation: 'float 6s ease-in-out infinite',
                    filter: 'drop-shadow(0 20px 30px rgba(0, 0, 0, 0.1))',
                }
            }}
        >
            <img
                src={Hero1}
                alt="Student studying with books and laptop"
            />
        </Box>
    );
}