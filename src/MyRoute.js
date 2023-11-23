import React from 'react'
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom'
import First from './First'
import Second from './Second'

const MyRoute = () => {
  return (
    <Router>
        <Routes>
            <Route path='/' element={<First/>}/>
            <Route path='/second' element={<Second/>}/>
        </Routes>
    </Router>
  )
}

export default MyRoute