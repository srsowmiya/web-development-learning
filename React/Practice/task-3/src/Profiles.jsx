import Sharvesh from './Sharvesh'
import Sowmiya from './Sowmiya'
import {useState} from 'react'

const Profiles=()=>{
    const [user,setUser]=useState("")
    return(
        <div>
            <button  onClick={()=>{setUser("Sowmiya")}}>Sowmiya</button>
            <button onClick={()=>{setUser("Sharvesh")}}>Sharvesh</button>
            {user==="Sowmiya"&&<Sowmiya/>}
            {user==="Sharvesh" && <Sharvesh/>}
        </div>
    )
}

export default Profiles