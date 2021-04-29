import React, { Component } from 'react';

import NavBar from './components/navbar';
import Header from './components/sidebar';
import Dashboard from "./components/dashboard";
import './App.css';
import './sidebar.css';
import SideBar from './components/sidebar';
import Home from './components/home';

class App extends Component {
  render() { 
    return ( 
      <div>
        <NavBar/>
        
       <SideBar/>

       <Home/>
       
       
      </div>
      
     );
  }
}
 
export default App;

