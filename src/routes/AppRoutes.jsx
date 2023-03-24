import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { LandingPage } from '../pages/LandingPage'
import { HomePage } from '../pages/HomePage'
import { DogPage } from '../pages/DogPage'

export const AppRoutes = () => {
  return (
    <BrowserRouter>
    <Routes>
      <Route path= "/" element= {<LandingPage/>} />
      <Route path= "/home" element={<HomePage />}/>
      <Route path='/dog' element={<DogPage/>}/>
    </Routes>
    </BrowserRouter>
  )
}
