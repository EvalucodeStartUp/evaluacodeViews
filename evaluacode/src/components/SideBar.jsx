import React from 'react';
import {Link} from "react-router-dom";
import {Drawer, List, ListItem, ListItemIcon, ListItemText} from "@mui/material";
import HomeIcon from '@mui/icons-material/Home';
import InfoIcon from '@mui/icons-material/Info';
import EmailIcon from '@mui/icons-material/Email';
import PersonIcon from '@mui/icons-material/Person';
import MenuBookIcon from '@mui/icons-material/MenuBook';
import {styled} from "@mui/material/styles";

function Sidebar() {
    return (
        <Drawer variant="permanent" sx={{ width: 240 }}>
            <List>
                <ListItem  component={Link} to="/" sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', '&:hover': {
                        backgroundColor: 'rgba(0, 0, 0, 0.1)',
                    }, }}>
                    <ListItemIcon sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                        <HomeIcon sx={{ fontSize: 40 }} />
                    </ListItemIcon>
                    <ListItemText primary="Home" />
                </ListItem>
                <ListItem  component={Link} to="/pricing" sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', '&:hover': {
                            backgroundColor: 'rgba(0, 0, 0, 0.1)', }, }}>
                    <ListItemIcon sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                        <PersonIcon  sx={{ fontSize: 40 }}/>
                    </ListItemIcon>
                    <ListItemText primary="pricing" />
                </ListItem>
                <ListItem  component={Link} to="/resources" sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', '&:hover': {
                    backgroundColor: 'rgba(0, 0, 0, 0.1)',}, }}>
                    <ListItemIcon sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                        <MenuBookIcon sx={{ fontSize: 40 }}/>
                    </ListItemIcon>
                    <ListItemText primary="resources" />
                </ListItem>
            </List>
        </Drawer>
    );
}
export default Sidebar;
