import React from "react";
import { NavLink } from "react-router-dom";
import Button from '@mui/material/Button';
import './styleNavigation.scss';
import logo from "../Assets/logo.PNG";

function Navigation() {
    return (
        <div className="navigation">
            <nav className="navbarnavbar-expand">
                <div className="container">
                    <div className="navbar-brand">
                        <img src={logo} className="imgLogo" alt="logo" />


                    </div>
                    <div>

                        <ul className="navbar-navml-auto">
                            <div className="line">
                            <li className="nav-item">
                                <NavLink className="nav-link" to="/">
                                    Home
                                </NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link" to="/pricing">
                                    Pricing
                                </NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link" to="/resources">
                                    Resources
                                </NavLink>
                            </li>
                        </div>
                            <li className="nav-item">
                                <NavLink className="navLinkDashboard" to="/dashboard">
                                    Dashboard
                                </NavLink>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>


        </div>
    );

}
{/*     <span className="sr-only">(actual)</span>
*/}

export default Navigation;