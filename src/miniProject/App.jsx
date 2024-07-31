import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Nav from './Nav.jsx'
import Main from './Main'
import Addproduct from './Addproduct'
import Productview from './Productview'
import './project.css';

const App = () => {
  return (
    <div>
      <Router>
        <Nav/>
        <Routes> 
            <Route path='/' element={<Main/>} />
            <Route path='/addproduct' element={<Addproduct/>} />
            <Route path='/viewproduct' element={<Productview/>} />
        </Routes>
      </Router>
    </div>
  )
}

export default App
