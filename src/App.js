import React, { Component } from 'react'
import logo from './logo.svg'
import './App.css'
import CollapsingNavBar from './Components/CollapsingNavBar';
import NavBar from "./Functional Components/Navbar";

class App extends Component {
  render() {
    return (
      <div className="App">
        <CollapsingNavBar><NavBar/></CollapsingNavBar>
       
      </div>
    );
  }
}

export default App;
