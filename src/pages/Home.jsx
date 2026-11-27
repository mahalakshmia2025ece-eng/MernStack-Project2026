import React from 'react'
import TaskCard from '../components/TaskCard'

const Home = () => {
  return (
    <div className="page-content">
      <h1>Explore the Universe</h1>
      <p>Welcome to CosmoVerse!</p>

      <TaskCard />
    </div>
  )
}

export default Home