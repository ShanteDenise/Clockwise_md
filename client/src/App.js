import React, { Component } from 'react';
import {BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import Clinic from './components/Clinic';
import Confirmation from './components/Confirmation'
import './App.css';


class App extends Component {
  render() {
    return (
      <div className="App">
      
        <Router>
          <Switch>

          <Route exact path="/clinic" component={ Clinic } />
          <Route exact path="/clinic/:id" component={ Confirmation }/>
          <Link to="/clinic">Reserve My Spot!</Link>


          </Switch> 
       </Router>

      </div>
    );
  }
}

export default App;