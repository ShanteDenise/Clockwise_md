import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import Clinic from './components/Clinic';
import User from './components/User';
import Confirmation from './components/Confirmation'
import './App.css';
import ReservationForm from './components/ReservationForm';
import Reservation from './components/Reservation';



class App extends Component {

  render() {
    return (
      <div className="App">

      
        <Router>
          <Switch>

          <Route exact path="/clinic" component={ Clinic } />
          <Route exact path="/clinic/:id" component={ Confirmation }/>
          <Route exact path="/user" component={ User }/>
          <Route exact path="/reservation" component={ ReservationForm }/>
          <Route exact path="/confirmation" component={ Reservation } />

          <Link to="/clinic">Reserve My Spot!</Link>


          </Switch> 
       </Router>

      </div>
        );
      }
    }
    
export default App;