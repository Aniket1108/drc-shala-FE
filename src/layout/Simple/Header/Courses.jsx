import { useState } from 'react'
import { useNavigate } from 'react-router-dom';

import { Box, Typography, Popover, Menu, MenuItem } from '@mui/material'
import { useTheme } from '@mui/material/styles';


const Courses = () => {
    const theme = useTheme();
    const navigate = useNavigate();

    const [anchorEl, setAnchorEl] = useState(null);
    const open = Boolean(anchorEl);

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    const handleMenuClick = () => {
        navigate("/courses")
    }

    return (
        <Box>
            <Typography
                sx={{ mr: 2, cursor: "pointer" }}
                aria-haspopup="true"
                onClick={handleClick}
            >
                Courses
            </Typography>

            <Menu
                id="basic-menu"
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
                MenuListProps={{
                    'aria-labelledby': 'basic-button',
                }}
            >
                <MenuItem onClick={handleMenuClick}>Foundation</MenuItem>
                <MenuItem onClick={handleMenuClick}>NEET</MenuItem>
                <MenuItem onClick={handleMenuClick}>JEE</MenuItem>
                <MenuItem onClick={handleMenuClick}>MHT-CET</MenuItem>
            </Menu>
        </Box>
    )
}

export default Courses