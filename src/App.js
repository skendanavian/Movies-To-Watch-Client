import React, { Component } from "react";
import NavBar from "./components/NavBar";
import Login from "./components/Login";
import Register from "./components/Register";
import LandingPage from "./components/LandingPage";
import "./App.css";
import CssBaseline from "@material-ui/core/CssBaseline";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

function App() {
  return (
    <Router>
      <CssBaseline />
      <Switch>
        <Route path="/">
          <LandingPage />
        </Route>
        <Route path="/movies">
          <NavBar />
        </Route>
        <Route path="/login">
          <Login />
        </Route>
        <Route path="/register">
          <Register />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
