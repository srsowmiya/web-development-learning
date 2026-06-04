import {useState} from 'react'
function App(){
  const [login,setLogin]=useState("false")
  return(
    <>
      { login ? <h1>Login successful</h1>:<h1>Please Login</h1>}
      <button onClick={()=>{setLogin(!login)}}>Toggle</button>
    </>
  )
}

export default App