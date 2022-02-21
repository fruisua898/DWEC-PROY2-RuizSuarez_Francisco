import '../components-css/Navegacion.css';
import React from 'react';
import logo from '../assets/images/logo.png'
import { BrowseRouter, Route, Switch } from "react-router-dom";

const Navegacion = () => {
  return (


  <nav class="navbar sticky-top navbar-expand-lg  bg-light">
    <a class="navbar-brand" href="#"><img class="logo" src={logo}/></a>  
      <ul class="navbar-nav" >
        <li class="nav-item">
          <a class="nav-link" href="#">Profile</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Academics</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Portfolio</a>
        </li>
    </ul>
</nav>

  )
}

export default Navegacion