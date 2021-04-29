import React, { Component } from 'react';
import logo from '../assets/Group-323.png'

class NavBar extends Component {
    state = {  }
    render() { 
        return ( 
            <nav class="navbar navbar-light bg-light">
  <div className="container">
    <a className="navbar-brand">Monitor</a>
    <form className="d-flex">
      <input style={{marginTop:'15px'}} className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
      <img src={logo}/>
    </form>
  </div>
</nav>
         );
    }
}
 
export default NavBar;