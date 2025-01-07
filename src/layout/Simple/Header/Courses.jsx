import { useState } from 'react'
import { useNavigate } from 'react-router-dom';

import { Box, Typography, Paper, Menu, MenuItem, ListItemIcon, ListItemText } from '@mui/material'
import Divider from '@mui/material/Divider';
import { useTheme } from '@mui/material/styles';
import LaptopMacIcon from '@mui/icons-material/LaptopMac';
import BookIcon from '@mui/icons-material/Book';
import SchoolIcon from '@mui/icons-material/School';
import ScienceIcon from '@mui/icons-material/Science';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import CollectionsBookmarkIcon from '@mui/icons-material/CollectionsBookmark';


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

    const handleMenuClick = (path) => {
        navigate(path)
        setAnchorEl(null);
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
                MenuProps={{
                    'aria-labelledby': 'basic-button',
                }}
                sx={{ marginTop: "10px" }}
            >

                <MenuItem onClick={() => handleMenuClick("/courses")}>
                    <ListItemIcon>
                        <CollectionsBookmarkIcon fontSize="small" />
                    </ListItemIcon>
                    <ListItemText sx={{ width: "180px" }}>All Courses</ListItemText>
                    <ListItemIcon>
                        <ArrowForwardIcon size="small" />
                    </ListItemIcon>
                </MenuItem>
                <Divider />
                <MenuItem onClick={() => handleMenuClick("/courses?id=foundation")}>
                    <ListItemIcon>
                        <BookIcon fontSize="small" />
                    </ListItemIcon>
                    <ListItemText sx={{ width: "180px" }}>Foundation</ListItemText>
                    <ListItemIcon>
                        <ArrowForwardIcon size="small" />
                    </ListItemIcon>
                </MenuItem>
                <MenuItem onClick={() => handleMenuClick("/courses?id=neet")}>
                    <ListItemIcon>
                        <ScienceIcon fontSize="small" />
                    </ListItemIcon>
                    <ListItemText sx={{ width: "180px" }}>NEET</ListItemText>
                    <ListItemIcon>
                        <ArrowForwardIcon size="small" />
                    </ListItemIcon>
                </MenuItem>
                <MenuItem onClick={() => handleMenuClick("/courses?id=jee")}>
                    <ListItemIcon>
                        <LaptopMacIcon fontSize="small" />
                    </ListItemIcon>
                    <ListItemText sx={{ width: "180px" }}>JEE</ListItemText>
                    <ListItemIcon>
                        <ArrowForwardIcon size="small" />
                    </ListItemIcon>
                </MenuItem>
                <MenuItem onClick={() => handleMenuClick("/courses?id=mht-cet")}>
                    <ListItemIcon>
                        <SchoolIcon fontSize="small" />
                    </ListItemIcon>
                    <ListItemText sx={{ width: "180px" }}>MHT-CET</ListItemText>
                    <ListItemIcon>
                        <ArrowForwardIcon size="small" />
                    </ListItemIcon>
                </MenuItem>
            </Menu>
        </Box>
    )
}

export default Courses