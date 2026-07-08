import {useState} from "react"
const State = () => {
    const [value,setColor]=useState("white");
  return (

    <div style={{backgroundColor:value, height:"100vh",width:"100vw",color:"white"}}>
        <h1>Change Theme</h1>
        <button onClick={()=>{setColor("black")}}>Black</button>
        <button onClick={()=>{setColor("white")}}>White</button>
    </div>
  )
}

export default State
