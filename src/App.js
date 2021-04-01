import React, { Component } from 'react'
import {Route} from "react-router-dom";
import logo from './logo.svg'
import './App.css'

import CollapsingNavBar from './Components/CollapsingNavBar';
import NavBar from "./Functional Components/Navbar";
import ReservationPage from "./Components/ReservationPage";


class App extends Component {
  render() {
    return (
      <div className="App">
        <CollapsingNavBar><NavBar/></CollapsingNavBar>
        <Route path="/Reservation"><ReservationPage/></Route>
        <Route path="/Rooms"></Route>
        <Route path="/Restaurant"></Route>
        <Route path="/Environment"></Route>
        <Route path="/Map"></Route>
        <Route path="/ContactUs"></Route>
        <Route path="/"></Route>
      </div>
    );
  }
}

export default App;
