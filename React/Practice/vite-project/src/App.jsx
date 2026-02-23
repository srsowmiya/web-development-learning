import React from 'react'
import Login from './Login'
import Signup from './Signup'
import Home from './Home'
import {Route,Routes,BrowserRouter} from 'react-router-dom'
const App = () => {
  return (
    <BrowserRouter>
        <Routes>
            <Route path="/login" element={<Login/>}> </Route>
            <Route path='/' element={<Signup/>}/>
            <Route path='/home' element={<Home/>}/>
        </Routes>
    </BrowserRouter>
  )
}

export default App
