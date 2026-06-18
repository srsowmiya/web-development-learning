import {useState} from 'react'
const Notes =()=>{
    const arr=["sowmiya","sharvesh","sobhika","divya"]
   return(
    <>
    <h1>Students</h1>
    <ul>
        {arr.map((items,key)=><li key={key}>{items}</li>)}
    </ul>
    </>
   )
}

export default Notes