import {useState} from 'react'

const App = () => {

  const [message,setMessage]=useState('')


  async function handleMessage(){
    const title = message.split("\n")[0].trim() || "No Subject";
    const res=await fetch('http://localhost:5000/notes',{
      method:'POST',
      headers:{
        'Content-Type':'application/json'
      },
      body:JSON.stringify({
        title:title,
        content:message
      })
    })  
    if(res.ok){
      const data=await res.json()
      setMessage(data.result)
    }
  }

  return (
    <div>
        <h1>Notes-App</h1>
        <textarea placeholder="Enter the title" onChange={(e)=>{setMessage(e.target.value)}}/>
        <button onClick={handleMessage}>Send</button>
        <h3>{message}</h3>
    </div>
  )
}

export default App
