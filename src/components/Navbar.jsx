import React from 'react'
import './Navbar.css'
import logo from '../assets/Logo.png'
import { NavLink } from 'react-router-dom'

const Navbar = () => {
  return (
    <nav className="navbar">

      <img
        src={logo}
        alt="CosmoVerse Logo"
        className="logo"
      />

      <ul className="nav-links">

        <li>
          <NavLink to="/dashboard">🏠 Home</NavLink>
        </li>

        <li>
          <NavLink to="/dashboard/search">🔎 Search</NavLink>
        </li>

        <li>
          <NavLink to="/dashboard/about">📖 About</NavLink>
        </li>

        <li>
          <NavLink to="/dashboard/contact">📡 Contact</NavLink>
        </li>

        <li>
          <NavLink to="/dashboard/service">🛎️ Service</NavLink>
        </li>

      </ul>

      <NavLink to="/" className="login-btn">
        🔐 Login
      </NavLink>

      <NavLink to="/dashboard/profile" className="profile">
        👤 Profile
      </NavLink>

    </nav>
  )
}

export default Navbar