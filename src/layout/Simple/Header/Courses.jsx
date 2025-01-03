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
        navigate("/courses")
    };

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
                <MenuItem onClick={handleClose}>Foundation</MenuItem>
                <MenuItem onClick={handleClose}>NEET</MenuItem>
                <MenuItem onClick={handleClose}>JEE</MenuItem>
                <MenuItem onClick={handleClose}>MHT-CET</MenuItem>
            </Menu>
        </Box>
    )
}

export default Courses