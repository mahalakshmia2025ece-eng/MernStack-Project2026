import React from 'react'
import Navbar from './Navbar'
import Sidebar from './Sidebar'
import SystemBanner from './SystemBanner'
import { Outlet } from 'react-router-dom'

const Dashboard = () => {
  return (
    <>
      <SystemBanner />
      <Navbar />

      <div className="dashboard-layout">
        <Sidebar />

        <main className="main-content">
          <Outlet />
        </main>
      </div>
    </>
  )
}

export default Dashboard