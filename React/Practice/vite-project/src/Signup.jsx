import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const Signup = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleSignup = async (e) => {
    e.preventDefault();
    const userData = { name, email, password };

    try {
        const response = await fetch('http://localhost:5000/api/signup', {
            method: 'POST',
            headers: { 'content-type': 'application/json' },
            body: JSON.stringify(userData),
        });


        const data = await response.json();

        if (response.ok) {
            alert('Registration Successful!');
        } else {
            
            alert(data.message || 'Registration failed');
        }
    } catch (e) {
        alert("Connection Error: " + e.message);
    }
};

    return (
        <div>
            <form onSubmit={handleSignup}>
                <label htmlFor="name">Name</label>
                <input 
                    type="text" 
                    id="name"
                    value={name} 
                    onChange={(e) => setName(e.target.value)} 
                />
                <br />

                <label htmlFor="email">Email</label>
                <input 
                    type="email" 
                    id="email"
                    value={email} 
                    onChange={(e) => setEmail(e.target.value)} 
                />
                <br />

                <label htmlFor="password">Password</label>
                <input 
                    type="password" 
                    id="password"
                    value={password} 
                    onChange={(e) => setPassword(e.target.value)} 
                />
                <br />

                <button type="submit">Sign Up</button>
                <p>Already a user? <Link to='/login'><span>Login</span></Link></p>
            </form>
        </div>
    )
}

export default Signup