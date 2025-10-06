import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import './Navbar.css'

export default function Navbar() {
  return (
    <div>
      <nav className="navbar navbar-expand-lg  ">
  <div className="container">
     <Link className="navbar-brand text-white text-uppercase logo" to= '' >Start Framework</Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
        <li className="nav-item ">
          <NavLink className={(x)=>x.isActive? "nav-link  my-nav act" : "nav-link  my-nav" } aria-current="page" to='about'>About</NavLink>
        </li>
        <li className="nav-item ">
          <NavLink className={(x)=>x.isActive? "nav-link  my-nav act" : "nav-link  my-nav" } to='portfolio'>PORTFOLIO</NavLink>
        </li>
       
        <li className="nav-item ">
          <NavLink className={(x)=>x.isActive? "nav-link  my-nav act" : "nav-link  my-nav" } to='contact'>CONTACT</NavLink>
        </li>
      </ul>
      
    </div>
  </div>
</nav>
    </div>
  )
}
