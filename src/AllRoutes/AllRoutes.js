import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Projects from '../Components/Projects'
import Home from '../Components/Home'
import About from '../Components/About'
import Contact from '../Components/Contact'

export const AllRoutes = () => {
  return (
  <Routes>
    <Route path='/' element={<Home/>} />
    <Route path='/projects' element={<Projects/>} />
    <Route path='/about' element={<About/>} />
    <Route path='/contact' element={<Contact/>} />
</Routes>
  )
}
