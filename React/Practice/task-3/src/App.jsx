import {useState,useRef} from 'react'
function App(){
  const [val,setVal]=useState('')
  const inputRef=useRef()

  return(
    <>
     <h1>Hello world</h1>
     <input type='text' ref={inputRef} onChange={(e)=>{setVal(e.target.value)}}/>
     <button onClick={()=>{inputRef.current.select()}}>Focus button</button>
     <h2>{val}</h2>
    </>
  )
}

export default App