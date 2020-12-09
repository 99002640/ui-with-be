import React from "react";
import "../asset/css/App.css";
import Login from "./Login";
import Dashboard from "./Dashboard";
import Profile from "./Profile";
import Device from "./Device";
import Header from "../header/Header";
import Devicedetails from "./Devicedetails";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
function App() {
  return (
    <Router>
      <div className="App">
        
        <Switch>
          <Route path="/Login" component={Login} />
          <Route path="/Profile" component={Profile} />
          <Route path="/Dashboard" component={Dashboard} />
          <Route path="/Header" component={Header} />
          <Route path="/Device" component={Device} />
          <Route path="/Devicedetails" component={Devicedetails} />
          <Route path="" exact component={Login} />
        </Switch>
        
      </div>
    </Router>
  );
}

export default App;
