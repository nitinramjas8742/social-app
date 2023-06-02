import React from "react";
import Homepage from "./pages/Home/Homepage";
import Login from "./pages/Login/Login";
import Profile from "./pages/profile_page/Profile";
import Register from "./pages/Register/Register";
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
function App() {
  
  return (
    <Router>
      <Routes>
        <Route path = "/Homepage" element = {<Homepage/>}>
        </Route>
        <Route path = "/" element = {<Login/>}>
        </Route>
        <Route path = "/Register" element = {<Register/>}>
        </Route>
      </Routes>
    </Router>
  );
}
export default App;
