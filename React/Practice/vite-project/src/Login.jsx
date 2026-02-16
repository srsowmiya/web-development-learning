import React from 'react'
import {Link} from 'react-router-dom'

const Login = () => {
  return (
    <div>
      <form action="">
        <label htmlFor="">Email</label>
        <input type="text" name="" id="" />
        <br />
        <label htmlFor="">Password</label>
        <input type="password" />
        <br />
        <button>Login</button>
        <p>or</p>
        <p>If new user <Link to='/'><span>Signup</span></Link></p>
      </form>
    </div>
  )
}

export default Login
