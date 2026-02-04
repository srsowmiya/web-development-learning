import React from 'react'
import { useState } from 'react';

const App = () => {
    const[val,setValue]=useState(0)
    function add(){
setValue(prevVal=>prevVal+2)
setValue(prevVal=>prevVal+2)
    }
    function subtract(){
setValue(prevVal=>prevVal-1)
    }
  return (
    <div>
        <button onClick={add } >+</button>
        <p>{val}</p>
        <button onClick={subtract}>-</button>
    </div>
  )
}

export default App
