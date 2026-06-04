import {useState} from 'react'
const Notes =()=>{
    const [note,setNote]=useState('')
    function handleSubmit(e){
        setNote(e.target.value)
        
    }
    return(
        <>
        <h1>Notes</h1>
        <textarea onChange={handleSubmit}></textarea>
        <button >Add Notes</button>
        </>
    )
}

export default Notes