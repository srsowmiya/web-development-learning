import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const Login = () => {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    
    const handleLogin = (e) => {
        e.preventDefault(); // This stops the browser reload!
        console.log("Logging in with:", email, password);

    }

  return (
    <div>
      <form onSubmit={handleLogin}>
        <label>Email</label>
        <input 
            type="email" 
            value={email} 
            onChange={(e) => setEmail(e.target.value)}
        />
        <br />
        <label>Password</label>
        <input 
            type="password" 
            value={password} 
            onChange={(e) => setPassword(e.target.value)}
        />
        <br />
        <button type="submit">Login</button>
        <p>or</p>
        <p>If new user <Link to='/'><span>Signup</span></Link></p>
      </form>
    </div>
  )
}

export default Login