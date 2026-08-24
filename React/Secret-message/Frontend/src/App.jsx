import {useState} from 'react'

const App = () => {
  const [code,setCode]=useState('')
  const [message,setMessage]=useState('')

  async function handleSubmit(){
    const resp=await fetch('http://localhost:5000/code')
    if(resp.ok){
      const data=await resp.json()
      setCode(data.result)
    }
    else
      alert("error generating code")
  }

  async function handleMessage(){
    const res=await fetch('http://localhost:5000/message')
    if(res.ok){
      const data=await res.json()
      setMessage(data.result)
    }
  }

  return (
    <div>
        <h1>Send Secret Messages</h1>      
        <button onClick={handleSubmit}>Generate Code</button>
        <h2>{code}</h2>
        <input type='text' onChange={(e)=>{setMessage(e.target.value)}}/>
        <button onClick={handleMessage}></button>
        <h3>{message}</h3>
    </div>
  )
}

export default App
