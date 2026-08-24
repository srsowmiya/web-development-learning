import {useState} from 'react'

const App = () => {
  const [code,setCode]=useState('')

  async function handleSubmit(){
    const resp=await fetch('http://localhost:5000/code')
    if(resp.ok){
      const data=await resp.json()
      setCode(data.result)
    }
    else
      alert("error generating code")
  }

  return (
    <div>
        <h1>Send Secret Messages</h1>      
        <button onClick={handleSubmit}>Generate Code</button>
        <h2>{code}</h2>
        <input type='text'/>
    </div>
  )
}

export default App
