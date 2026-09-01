import {useState} from 'react'

const App = () => {

  const [message,setMessage]=useState('')


  async function handleMessage(){
    const res=await fetch('http://localhost:5000/notes',{
      method:'POST',
      headers:{
        'Content-Type':'application/json'
      },
      body:JSON.stringify({message})
    })
    if(res.ok){
      const data=await res.json()
      setMessage(data.result)
    }
  }

  return (
    <div>
        <h1>Notes-App</h1>
        <input type='text' onChange={(e)=>{setMessage(e.target.value)}}/>
        <button onClick={handleMessage}>Send</button>
        <h3>{message}</h3>
    </div>
  )
}

export default App
