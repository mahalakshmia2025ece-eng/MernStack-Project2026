
import React from 'react'
import './Navbar.css'
import logo from '../assets/Logo.png'

const Navbar = () => {
  return (
    <nav className="navbar">

     <img src={logo} alt="CosmoVerse Logo" className="logo"/>
      <ul className="nav-links">
        <li className="nav-links">🏠Home</li>
        <li className="nav-links">🔎Search</li>
        <li className="nav-links">📖About</li>
        <li className="nav-links">📡Contact</li>
        <li className="nav-links">🛎️Service</li>
      </ul>

      <button className="profile">👤Profile</button>

    </nav>
  )
}

export default Navbar
