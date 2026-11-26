
import React, { useState, useEffect } from 'react'
import './SystemBanner.css'

const SystemBanner = () => {

  const [status,setStatus] = useState(navigator.onLine);

  useEffect(() => {

    const online = () => setStatus(true);
    const offline = () => setStatus(false);

    window.addEventListener('online', online);
    window.addEventListener('offline', offline);

    return () => {
      window.removeEventListener('online', online);
      window.removeEventListener('offline', offline);
    }

  }, []);

  return (
    <div className="system-banner">

      <h3>
        {status ? "CosmoVerse System Online" : "Connection Lost"}
      </h3>

      <p>
        {status
          ? "Welcome to CosmoVerse! Explore the universe."
          : "Please check your internet connection."}
      </p>

    </div>
  )
}

export default SystemBanner
