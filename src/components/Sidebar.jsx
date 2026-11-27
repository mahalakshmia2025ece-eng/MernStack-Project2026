import React from 'react'
import './Sidebar.css'
import { NavLink } from 'react-router-dom'

const Sidebar = () => {
  return (
    <div className="sidebar">

      <h2 className="side-heading">Explore</h2>

      <ul className="side-links">

        <li><NavLink to="/dashboard/solar-system">🌏 Solar System</NavLink></li>
        <li><NavLink to="/dashboard/planets">🌌 Planets</NavLink></li>
        <li><NavLink to="/dashboard/galaxies">🌌 Galaxies</NavLink></li>
        <li><NavLink to="/dashboard/black-holes">⚫ Black Holes</NavLink></li>
        <li><NavLink to="/dashboard/space-missions">👨‍🚀 Space Missions</NavLink></li>
        <li><NavLink to="/dashboard/physics-library">📚 Physics Library</NavLink></li>
        <li><NavLink to="/dashboard/latest-discoveries">🧑‍💻 Latest Discoveries</NavLink></li>
        <li><NavLink to="/dashboard/settings">🛠️ Settings</NavLink></li>

      </ul>

    </div>
  )
}

export default Sidebar