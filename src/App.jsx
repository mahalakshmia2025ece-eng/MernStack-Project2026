
import React from 'react'
import { Routes, Route, Navigate } from 'react-router-dom'

import AuthenticationPage from "./Auth/AuthenticationPage";
import Dashboard from './components/Dashboard'

import Home from './pages/Home'
import Search from './pages/Search'
import About from './pages/About'
import Contact from './pages/Contact'
import Service from './pages/Service'
import Profile from './pages/Profile'

import SolarSystem from './pages/SolarSystem'
import Planets from './pages/Planets'
import Galaxies from './pages/Galaxies'
import BlackHoles from './pages/BlackHoles'
import SpaceMissions from './pages/SpaceMissions'
import PhysicsLibrary from './pages/PhysicsLibrary'
import LatestDiscoveries from './pages/LatestDiscoveries'
import Settings from './pages/Settings'
import QuantumPhysics from './pages/QuantumPhysics'

import './App.css'

const App = () => {
  return (
    <Routes>

      {/* Authentication */}
      <Route path="/" element={<AuthenticationPage />} />

      {/* Dashboard */}
      <Route path="/dashboard" element={<Dashboard />}>

        <Route index element={<Home />} />

        <Route path="search" element={<Search />} />
        <Route path="about" element={<About />} />
        <Route path="contact" element={<Contact />} />
        <Route path="service" element={<Service />} />
        <Route path="profile" element={<Profile />} />

        <Route path="solar-system" element={<SolarSystem />} />
        <Route path="planets" element={<Planets />} />
        <Route path="galaxies" element={<Galaxies />} />
        <Route path="black-holes" element={<BlackHoles />} />
        <Route path="space-missions" element={<SpaceMissions />} />
        <Route path="physics-library" element={<PhysicsLibrary />} />
        <Route path="latest-discoveries" element={<LatestDiscoveries />} />
        <Route path="settings" element={<Settings />} />

        <Route path="quantum-physics" element={<QuantumPhysics />} />

      </Route>

      <Route path="*" element={<Navigate to="/" />} />

    </Routes>
  )
}

export default App
