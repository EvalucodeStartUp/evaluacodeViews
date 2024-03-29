import React, { useState } from "react";
import {
    Drawer, Icon,
    IconButton,
    List, ListItem,
    ListItemButton,
    ListItemIcon,
    ListItemText,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import {Link} from "react-router-dom";
import HomeIcon from '@mui/icons-material/Home';
import PointOfSaleIcon from '@mui/icons-material/PointOfSale';
import SchoolIcon from '@mui/icons-material/School';
import DashboardIcon from '@mui/icons-material/Dashboard';
const pages = ["Home", "pricing", "resources"];
const DrawerComp = () => {
    const [openDrawer, setOpenDrawer] = useState(false);

    return (
        <React.Fragment>
            <Drawer
                anchor="left"
                open={openDrawer}
                onClose={() => setOpenDrawer(false)}
            >
                <List>

                        <ListItem sx = {{"&:hover": {
                                border: "gray",
                                color: 'gray',

                            } }} component={Link} to="/">
                            <ListItemIcon>
                                <HomeIcon/>
                            </ListItemIcon>
                                <ListItemText>Home</ListItemText>
                        </ListItem>
                    <ListItem sx = {{"&:hover": {
                            border: "gray",
                            color: 'gray',

                        } }} component={Link} to="/pricing">
                        <ListItemIcon>
                            <PointOfSaleIcon/>
                        </ListItemIcon>
                        <ListItemText>Pricing</ListItemText>
                    </ListItem>
                    <ListItem sx = {{"&:hover": {
                            border: "gray",
                            color: 'gray',

                        } }} component={Link} to="/resources">
                        <ListItemIcon>
                            <SchoolIcon/>
                        </ListItemIcon>
                        <ListItemText>Resources</ListItemText>
                    </ListItem>
                    <ListItem sx = {{"&:hover": {
                            border: "gray",
                            color: 'gray',

                        } }} component={Link} to="/dashboard">
                        <ListItemIcon>
                            <DashboardIcon/>
                        </ListItemIcon>
                        <ListItemText>Dashboard</ListItemText>
                    </ListItem>

                </List>
            </Drawer>
            <IconButton
                sx={{ color: "black", marginLeft: "auto" }}
                onClick={() => setOpenDrawer(!openDrawer)}
            >
                <MenuIcon color="black" />
            </IconButton>
        </React.Fragment>
    );
};

export default DrawerComp;