import React, { useState } from 'react'
import './App.sass'
import Home from './Pages/Home'
import Movie from './Pages/Movie'
import TvShow from './Pages/TvShow'
import Game from './Pages/Game'
import { Routes, Route } from 'react-router-dom'
import Details from './Components/Moviesdetails/Details'


function App() {
  const [count, setCount] = useState(0)

  return (
  
   <Routes>
      <Route path='/' element={<Home/>}></Route>
      <Route path="/data/:id" element={<Details/>} />
      <Route path='/movie' element={<Movie/>}></Route>
      <Route path='/tvshow' element={<TvShow/>}></Route>
      <Route path='/game' element={<Game/>}></Route>


   </Routes>
  )
}

export default App
