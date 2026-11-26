import React, { useState } from 'react'
import './AuthenticationPage.css'

const AuthenticationPage = () => {

  const [name,setName] = useState("");
  const [email,setEmail] = useState("");
  const [password,setPassword] = useState("");
  const [message,setMessage] = useState("");

  const handlesubmit = (e) => {
    e.preventDefault();

    if(name === "" || email === "" || password === "") {
      setMessage("Please fill all fields");
    }
    else {
      setMessage("Authentication Successful");
    }
  }

  return (
    <div className="container">
      <div className="auth-box">

        <h1 className="heading">CosmoVerse</h1>
        <h2>Authentication</h2>

        <form onSubmit={(e) => handlesubmit(e)}>

          <label>Name : </label>
          <input type="text"
            placeholder="Enter Your Name"
            onChange={(e) => setName(e.target.value)}
          />

          <br/><br/>

          <label>Email : </label>
          <input type="email"
            placeholder="Enter Your Email"
            onChange={(e) => setEmail(e.target.value)}
          />

          <br/><br/>

          <label>Password : </label>
          <input type="password"
            placeholder="Enter Your Password"
            onChange={(e) => setPassword(e.target.value)}
          />

          <br/><br/>

          <button type="submit">Submit</button>

        </form>

        <p>{message}</p>

      </div>
    </div>
  )
}

export default AuthenticationPage