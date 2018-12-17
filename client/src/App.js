import React, { Component } from 'react';
import {BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import Clinic from './components/Clinic';
<<<<<<< HEAD
import User from './components/User'
=======
import Confirmation from './components/Confirmation'
>>>>>>> 205eb3f4ff2d9c99d40a04342d2a4871bd16f372
import './App.css';


class App extends Component {
  render() {
    return (
      <div className="App">
      
        <Router>
          <Switch>

          <Route exact path="/clinic" component={ Clinic } />
<<<<<<< HEAD
          <Route exact path="/user" component={User} />
=======
          <Route exact path="/clinic/:id" component={ Confirmation }/>
          <Link to="/clinic">Reserve My Spot!</Link>

>>>>>>> 205eb3f4ff2d9c99d40a04342d2a4871bd16f372

          </Switch> 
       </Router>

      </div>
    );
  }
}

export default App;