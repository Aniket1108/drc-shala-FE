import { useState } from 'react'
import { Box, Typography, Popover } from '@mui/material'
import { useTheme } from '@mui/material/styles';


const Courses = () => {
    const theme = useTheme();
    const [anchorEl, setAnchorEl] = useState(null);

    const handlePopoverOpen = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handlePopoverClose = () => {
        setAnchorEl(null);
    };

    const open = Boolean(anchorEl);



    return (
        <Box>
            <Typography
                sx={{ mr: 2, cursor: "pointer" }}
                aria-owns={open ? 'mouse-over-popover' : undefined}
                aria-haspopup="true"
                onMouseEnter={handlePopoverOpen}
                onMouseLeave={handlePopoverClose}
            >
                Study Materials
            </Typography>

            <Popover
                id="mouse-over-popover"
                sx={{
                    pointerEvents: 'none',
                    boxShadow: theme.customShadows.z1
                }}
                open={open}
                anchorEl={anchorEl}
                anchorOrigin={{
                    vertical: 'bottom',
                    horizontal: 'left',
                }}
                transformOrigin={{
                    vertical: 'top',
                    horizontal: 'left',
                }}
                onClose={handlePopoverClose}
            >
                <Typography sx={{ p: 1 }}>NEET</Typography>
                <Typography sx={{ p: 1 }}>JEE</Typography>
                <Typography sx={{ p: 1 }}>MHT-CET</Typography>
            </Popover>
        </Box>
    )
}

export default Courses