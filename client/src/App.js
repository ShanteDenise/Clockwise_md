import React, { Component } from 'react';
import {BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import Clinic from './components/Clinic';
import User from './components/User'
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
       <h1>Hello from landing</h1>
        <Router>
          <Switch>

          <Route exact path="/clinic" component={ Clinic } />
          <Route exact path="/user" component={User} />

          </Switch> 
       </Router>

      </div>
    );
  }
}

export default App;