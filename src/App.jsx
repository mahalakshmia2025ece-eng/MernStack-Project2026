
import React from 'react'
import Navbar from './components/Navbar'
import Sidebar from './components/Sidebar'
import TaskCard from './components/TaskCard'
import SystemBanner from './components/SystemBanner'

const App = () => {
  return (
    <>
      <SystemBanner />
      <Navbar />

      <div style={{display:'flex'}}>

        <Sidebar />

        <div >

          <div style={{display:'flex', flexWrap:'wrap',}}>

            <TaskCard
              title="🌏Solar System"
              description="Explore planets and their movements."
            />

            <TaskCard
              title="⚫Black Holes"
              description="Discover the mysteries of black holes."
            />

            <TaskCard
              title="🌌Galaxies"
              description="Learn about different types of galaxies."
            />

            <TaskCard
              title="✍️Quantum Physics"
              description="Explore quantum physics."
            />

          </div>
        </div>

      </div>
    </>
  )
}

export default App
