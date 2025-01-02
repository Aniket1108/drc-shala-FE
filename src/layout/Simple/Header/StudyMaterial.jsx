import { useState } from 'react'
import { Box, Typography, Popover, Button, Menu, MenuItem } from '@mui/material'
import { useTheme } from '@mui/material/styles';


const Courses = () => {
    const theme = useTheme();

    const [anchorEl, setAnchorEl] = useState(null);
    const open = Boolean(anchorEl);

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    return (
        <Box>
            <Typography
                sx={{ mr: 2, cursor: "pointer" }}
                aria-haspopup="true"
                onClick={handleClick}
            >
                Study Materials
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
                <MenuItem onClick={handleClose}>Comming Soon ...</MenuItem>
            </Menu>
        </Box>
    )
}

export default Courses