import React, { Component } from 'react';
import {BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import Clinic from './components/Clinic';
import './App.css';


class App extends Component {
  render() {
    return (
      <div className="App">
      <div><Link to="/clinic">Reserve My Spot!</Link></div>
      
        <Router>
          <Switch>

          <Route exact path="/clinic" component={ Clinic } />

          </Switch> 
       </Router>

      </div>
    );
  }
}

export default App;