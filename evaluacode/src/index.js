
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import reportWebVitals from './reportWebVitals';
import MainPage from "./Pages/MainPage";
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Navigation from "./components/Navigation";
import PricingPage from "./Pages/PricingPage";
import ResourcesPage from "./Pages/ResourcesPage";
import DashboardPage from "./Pages/DashboardPage";
import LogIn from "./Pages/LogIn";

ReactDOM.render(
    <Router>
        <Navigation/>
        <Routes>
            <Route path ="/" element={<MainPage/> }/>
            <Route path ="/pricing" element={<PricingPage/> }/>
            <Route path ="/resources" element={<ResourcesPage/> }/>
            <Route path ="/dashboard" element={<LogIn/> }/>

        </Routes>
    </Router>,
    document.getElementById("root")
);
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
//reportWebVitals();
/*
import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import App from './App';
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>,
    document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
*/
