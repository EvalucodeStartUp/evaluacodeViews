import React from "react";
import {Link, NavLink} from "react-router-dom";
import Button from '@mui/material/Button';
import logo from "../Assets/logo.PNG";
import {AppBar, IconButton, Toolbar} from "@mui/material";
import {CatchingPokemon} from "@mui/icons-material";

function Navigation() {
    return (
       <div className="navigation">
           <Link to="/pricing">
               pricing
           </Link>
           <Button variant="outlined">Outlined</Button>
           <Link to="/pricinga">
               pricing
           </Link>
           <AppBar position="static">
               <Toolbar>
                   <IconButton size="large" edge="start" color="inherit" aria-label='logo'>
                       <CatchingPokemon/>
                       </IconButton>
               </Toolbar>

           </AppBar>



       </div>
    );

}
{/*     <span className="sr-only">(actual)</span>
*/}

export default Navigation;