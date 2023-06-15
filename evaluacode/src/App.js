import React from 'react';
import ReactDOM from 'react-dom';
import reportWebVitals from './reportWebVitals';
import MainPage from "./Pages/MainPage";
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import PricingPage from "./Pages/PricingPage";
import ResourcesPage from "./Pages/ResourcesPage";
import DashboardPage from "./Pages/DashboardPage";
import LogIn from "./Pages/LogIn";

function App() {
    return (
    <Router>
        <Routes>
            <Route path ="/" element={<MainPage/> }/>
            <Route path ="/pricing" element={<PricingPage/> }/>
            <Route path ="/resources" element={<ResourcesPage/> }/>
            <Route path ="/dashboard" element={<LogIn/> }/>
        </Routes>
    </Router>

    );
}

export default App;


