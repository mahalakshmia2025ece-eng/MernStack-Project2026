import React from 'react'
import './TaskCard.css'

const TaskCard = ({ title, description }) => {
  return (
    <div className="task-card">
      <h2>{title}</h2>
      <p>{description}</p>
      <button>Explore More</button>
    </div>
  )
}

export default TaskCard