import { ImportantDevices } from "@mui/icons-material";
import "./index.scss"
import React from "react";
import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
import MainPage from "./Pages/MainPage";

//<Route path="/video" element={<Grabador/>}/>
//import VideoSearchScreen from "./Components/VideoSearchScreen";
function App() {
  return (
      <Router>
        <Routes>
          <Route path ="/" element={<MainPage/> }/>
          <Route path ="/pricing" element={<MainPage/> }/>
          <Route path ="/resources" element={<MainPage/> }/>
          <Route path ="/dashboard" element={<MainPage/> }/>
        </Routes>
      </Router>
  );
}


export default App;