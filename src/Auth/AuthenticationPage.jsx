
import React, { useState } from 'react'
import './AuthenticationPage.css'

const AuthenticationPage = () => {

  const [isLogin,setIsLogin] = useState(true);
  const [name,setName] = useState("");
  const [email,setEmail] = useState("");
  const [password,setPassword] = useState("");
  const [message,setMessage] = useState("");

  const handlesubmit = (e) => {
    e.preventDefault();

    if(email === "" || password === "" || (!isLogin && name === "")) {
      setMessage("Please fill all fields");
    }
    else {
      setMessage(isLogin ? "Login Successful" : "Signup Successful");
    }
  }

  const changeMode = () => {
    setIsLogin(!isLogin);
    setName("");
    setEmail("");
    setPassword("");
    setMessage("");
  }

  return (
    <div className="container">
      <div className="auth-box">

        <h1 className="heading">CosmoVerse</h1>

        <h2>{isLogin ? "Login" : "Sign Up"}</h2>

        <form onSubmit={handlesubmit}>

          {!isLogin && (
            <>
              <label>Name : </label>
              <input type="text"
                placeholder="Enter Your Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
              <br/><br/>
            </>
          )}

          <label>Email : </label>
          <input type="email"
            placeholder="Enter Your Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <br/><br/>

          <label>Password : </label>
          <input type="password"
            placeholder="Enter Your Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          <br/><br/>

          <button type="submit">
            {isLogin ? "Login" : "Sign Up"}
          </button>

        </form>

        <p>{message}</p>

        <p>
          {isLogin ? "Don't have an account?" : "Already have an account?"}
          <button className="switch" onClick={changeMode}>
            {isLogin ? "Sign Up" : "Login"}
          </button>
        </p>

      </div>
    </div>
  )
}

export default AuthenticationPage
