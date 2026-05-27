import React from 'react'
import {useEffect} from 'react'

const Home=()=>{
    const arr=["sowmiya","sharvesh","sobhika"]
    useEffect(()=>{
        console.log("Home component rendered")
    },[])
    return(
        <>
        <ul>{arr.map(val=>(<li>{val}</li>))}</ul>
        <h1>Welcome to the home page</h1>
        </>
    )
}

export default Home