
import React from 'react'
import './TaskCard.css'
import { Link } from 'react-router-dom'

const TaskCard = () => {
  return (
    <div className="task-container">

      <div className="task-card">
        <h2>🌏 Solar System</h2>
        <p>Explore planets and their movements.</p>
        <Link to="/dashboard/solar-system" className="explore-button">
          Explore More
        </Link>
      </div>

      <div className="task-card">
        <h2>⚫ Black Holes</h2>
        <p>Discover the mysteries of black holes.</p>
        <Link to="/dashboard/black-holes" className="explore-button">
          Explore More
        </Link>
      </div>

      <div className="task-card">
        <h2>🌌 Galaxies</h2>
        <p>Learn about different types of galaxies.</p>
        <Link to="/dashboard/galaxies" className="explore-button">
          Explore More
        </Link>
      </div>

      <div className="task-card">
        <h2>✍️ Quantum Physics</h2>
        <p>Explore the fascinating world of quantum physics.</p>
        <Link to="/dashboard/quantum-physics" className="explore-button">
          Explore More
        </Link>
      </div>

    </div>
  )
}

export default TaskCard
