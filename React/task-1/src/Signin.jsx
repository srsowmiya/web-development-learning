import { useState } from "react";

const Signin = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");


    async function handleSubmit (e) {
        e.preventDefault();

        console.log({
            email,
            password
        });
        const data={
            email,
            password
        }

        const response = await fetch('http://localhost:3000/signin',{
            method:'POST',
            headers:{
                'Content-Type':"application/json"
            },
            body:JSON.stringify(data)
        })

        if(response.ok){
            const msg=await response.json()
            console.log(msg)
            alert("Signin successful")
        }
        else
            alert("Signin failed")
    };

    return (
        <>
            <h1>Sign In</h1>

            <form onSubmit={handleSubmit}>
                <input
                    type="email"
                    placeholder="Enter Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />

                <br /><br />

                <input
                    type="password"
                    placeholder="Enter Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />

                <br /><br />

                <button type="submit">
                    Sign In
                </button>
            </form>
        </>
    );
};

export default Signin;