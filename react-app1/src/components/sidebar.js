import React, { Component } from 'react';
import Logo from '../assets/Group-537@2x.png'
import Ficon from '../assets/Group-538.png'
import Sicon from '../assets/Group-563.png'
import Ticon from '../assets/Group-548.png'
import Fricon from '../assets/Group-555.png'
import Fificon from '../assets/Group-549.png'

class SideBar extends Component {
  state = {  }
  render() { 
    return ( 
      <div class="sidebar" style={{textAlign:'center', backgroundColor:'#032f4c'}}>
        <div style={{backgroundColor:"#ff0059" }}><a href="#home"><i className="fa fa-fw fa-home"></i> <img src={Logo}/></a></div>
  
  <a href="#services"><i className="fa fa-fw fa-wrench"></i><img src={Ficon}/></a>
  <a href="#clients"><i className="fa fa-fw fa-user"></i> <img src={Sicon}/></a>
  <a href="#contact"><i className="fa fa-fw fa-envelope"></i> <img src={Ticon}/></a>
  <a href="#contact"><i className="fa fa-fw fa-envelope"></i> <img src={Fificon}/></a>
  <a href="#contact"><i className="fa fa-fw fa-envelope"></i> <img src={Fricon}/></a>
</div>
      );
  }
}
 
export default SideBar;