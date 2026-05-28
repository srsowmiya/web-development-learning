import {useState} from 'react'
const Login = () => {
    const [username,setUsername]=useState("")
    const [password,setPassword]=useState("")

    async function  handleClick(e){
        e.preventDefault()
        const data={
            username,
            password
        }
        const response = await fetch("http://localhost:3000/login",{
            method:"POST",
            headers:{
                "Content-Type":"application/json"
            },
            body:JSON.stringify(data)
        })
        if(response.ok){
            const res=await response.json()
            console.log(res)
        }
    }
    
  return (
    <div style={styles.wrap}>
      <div style={styles.card}>
        <p style={styles.title}>Sign in</p>
        <form action="" onSubmit={handleClick}>

        <div style={styles.field}>
          <label htmlFor="username" style={styles.label}>Username</label>
          <input type="text" id="username" placeholder="Enter username" style={styles.input} onChange={(e) => setUsername(e.target.value)}/>
        </div>

        <div style={styles.field}>
          <label htmlFor="password" style={styles.label}>Password</label>
          <input type="password" id="password" placeholder="Enter password" style={styles.input} onChange={(e) => setPassword(e.target.value)} />
        </div>

        <button style={styles.btn} >Submit</button>
        </form>
      </div>
    </div>
  );
};

const styles = {
  wrap: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    minHeight: "100vh",
    backgroundColor: "#f5f5f3",
  },
  card: {
    background: "#fff",
    border: "0.5px solid rgba(0,0,0,0.12)",
    borderRadius: "12px",
    padding: "2rem",
    width: "100%",
    maxWidth: "360px",
  },
  title: {
    fontSize: "18px",
    fontWeight: 500,
    margin: "0 0 1.5rem",
    color: "#111",
  },
  field: {
    display: "flex",
    flexDirection: "column",
    gap: "6px",
    marginBottom: "1rem",
  },
  label: {
    fontSize: "13px",
    fontWeight: 500,
    color: "#555",
  },
  input: {
    padding: "8px 12px",
    fontSize: "14px",
    border: "0.5px solid rgba(0,0,0,0.2)",
    borderRadius: "8px",
    outline: "none",
    width: "100%",
    boxSizing: "border-box",
  },
  btn: {
    width: "100%",
    marginTop: "0.5rem",
    padding: "9px 0",
    fontSize: "14px",
    fontWeight: 500,
    background: "#111",
    color: "#fff",
    border: "none",
    borderRadius: "8px",
    cursor: "pointer",
  },
};

export default Login;