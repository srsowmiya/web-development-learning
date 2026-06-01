import {useState} from 'react'
const App=()=>{
  const [color,setColor]=useState('white')

  return(
    <div style={{backgroundColor:color,minHeight: '100vh',  
      width: '100%'}}>
    <h1>Welcome to colour changing backgroun</h1>
    <button value="green" onClick={(e)=>setColor(e.target.value)} >Green</button>
    <button value="red" onClick={(e)=>setColor(e.target.value)}>Red</button>
    <button value="blue" onClick={(e)=>setColor(e.target.value)}>Blue</button>
    </div>
  )
}

export default App