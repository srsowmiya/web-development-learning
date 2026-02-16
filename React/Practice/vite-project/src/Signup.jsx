import React from 'react'
import {Link} from 'react-router-dom'

const Signup = () => {
  return (
    <div>
      <form action="">
        <label htmlFor="">Name</label>
        <input type="text" />
        <br />
        <label htmlFor="">Email</label>
        <input type="email" />
        <br />
        <label htmlFor="">Password</label>
        <input type="password" name="" id="" />
        <br />
        <button>Sign Up</button>
        <p>Already an user <Link to='/login'><span>Login</span></Link></p>
      </form>
    </div>
  )
}

export default Signup
