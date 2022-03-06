import '../components-css/Navegacion.css';
import React from 'react';
import logo from '../assets/images/logo.png'
import { Link as Zelda}from 'react-router-dom'

const Navegacion = () => {
  return (


  <nav class="navbar sticky-top navbar-expand-lg  bg-light">
    <a class="navbar-brand" href="#"><img class="logo" src={logo}/></a>  
      <ul class="navbar-nav" >

        <li class="nav-item">
          <Zelda to='/'>
            <a class="nav-link" href="#">Profile</a></Zelda>
        </li>

        <li class="nav-item">
          <Zelda to="/academics">
            <a class="nav-link" href="#">Academics</a></Zelda>
        </li>

        <li class="nav-item">
          <Zelda to="/portfolio">
            <a class="nav-link" href="#">Portfolio</a></Zelda>
        </li>

        <li class="nav-item">
          <Zelda to="/random">
            <a class="nav-link" href="#">Random</a></Zelda>
        </li>

        
        <li class="nav-item">
          <Zelda to="/tareas">
            <a class="nav-link" href="#">Tareas</a></Zelda>
        </li>

    </ul>
</nav>

  )
}

export default Navegacion