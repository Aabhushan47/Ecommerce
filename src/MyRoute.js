import React from 'react'
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom'
import Layout from './components/Layout'
import HomePage from './pages/HomePage'
import Products from './pages/Products'

const MyRoute = () => {
  return (
    <>
    <Router>
        <Routes>
            <Route path='/' element={<Layout/>}>
                <Route index element={<HomePage/>}/>
                <Route path='products' element={<Products/>}/>
            </Route>
        </Routes>
    </Router>
    </>
  )
}

export default MyRoute