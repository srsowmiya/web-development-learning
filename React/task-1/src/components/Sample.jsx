import {useState,useEffect} from 'react'

const Sample = () => {
  const [count,setCount]=useState(0)
  useEffect(()=>{
    console.log('rendered')
  },[count])
  return (
    <>
      <button onClick={()=>{setCount(count+1)}} style={{height:'50px',width:'50px'}}>{count}</button>
    </>
  )
}

export default Sample
