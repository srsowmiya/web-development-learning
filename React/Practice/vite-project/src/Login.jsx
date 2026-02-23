import React, { useState } from 'react'
import { Link,useNavigate } from 'react-router-dom'
import Home from './Home'

const Login = () => {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    let navigate=useNavigate()
    
    const handleLogin = async (e) => {
        e.preventDefault(); 

        const userData={
          email,password
        }

        try{
            const response = await fetch('http://localhost:5000/api/login',{
              method:'POST',
              headers:{
                'content-type':'application/json'
              },
              body:JSON.stringify(userData)
            })

            await response.json()
            if (response.ok) {
              navigate('/home')
          
            }
        }
        catch(e){
            alert(e.message)
        }

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