import React from 'react';
import { Link } from "react-router-dom";
import './NavBar.css'


const NavBar= () =>{
  return (
  <div id="navbar">
    <li>
      <Link to="">Landing</Link>
    </li> 
    <li>
      <Link to="/Current">Current</Link>
    </li>
    <li>
      <Link to="/Gallery">Gallery</Link>
    </li>
    <li>
      <a href="https://www.canva.com/design/DAFHDUxD4mI/0KYQ-1AuHpLsKnnZv3sePw/view">Prezi</a>
    </li>       
  </div>
  );
}
export default NavBar;