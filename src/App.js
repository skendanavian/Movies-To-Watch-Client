import React, { Component } from "react";
import NavBar from "./components/NavBar";
import "./App.css";
import CssBaseline from "@material-ui/core/CssBaseline";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

function App() {
  return (
    <Router>
      <CssBaseline />
      <div>
        <NavBar />
      </div>
    </Router>
  );
}

export default App;
