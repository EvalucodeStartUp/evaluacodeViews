import React, { useState } from "react";
import {AppBar, Button, Tab, Tabs, Toolbar, Typography, useMediaQuery, useTheme} from "@mui/material";
import DrawerComp from "./Drawer";
import logo from '../Assets/logo.PNG'; // Tell webpack this JS file uses this image

import {Link} from "react-router-dom";
const Navigation = () => {
    const [value, setValue] = useState();
    const theme = useTheme();
    console.log(theme);
    const isMatch = useMediaQuery(theme.breakpoints.down("md"));
    console.log(isMatch);

    return (
        <React.Fragment>
            <AppBar position='static' sx={{ background: "#FFFFFF" }}>
                <Toolbar>
                    <img src={logo} alt="Logo" height={'50px'}/>

                    {isMatch ? (
                        <>
                            <DrawerComp />
                        </>
                    ) : (
                        <>

                            <Tabs
                                sx={{ color: '#000000' , marginLeft:'auto'}}

                                textColor="inherit"
                                value={value}
                                onChange={(e, value) => setValue(value)}
                                justifyContent="flex-end"

                            >
                                <Tab label="Home" index={0} component={Link} to={"/"} />
                                <Tab label="Pricing" index={1} component={Link} to={"/pricing"} />
                                <Tab label="Resources" index={1} component={Link} to={"/resources"} />

                            </Tabs>
                            <Button component={Link} to="/dashboard" sx={{ marginLeft: "auto", color: '#FFFFFF', background:'#224C8D' }} variant="contained">
                                Dashboard
                            </Button>

                        </>
                    )}
                </Toolbar>
            </AppBar>
        </React.Fragment>
    );
};
{/*         </Link></Button>
                       <Button color='inherit'><Link to="/dashboard">
                           dashboard
                       </Link></Button>



                       <Typography sx={{ fontSize: "1.5rem", flexGrow:1, paddingLeft: "5%", color: '#000000'}}>
                        Evalucode
                    </Typography>
         */}

export default Navigation;