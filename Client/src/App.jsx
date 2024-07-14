import React, { useState } from 'react'
import './App.sass'
import Home from './Pages/Home'
import Movie from './Pages/Movie'
import TvShow from './Pages/TvShow'
import Game from './Pages/Game'
import { Routes, Route } from 'react-router-dom'
import Details from './Components/Moviesdetails/Details'
import ListPage from './Pages/ListPage'
import SearchPage from './Pages/SearchPage'
import SignInPage from './Pages/SignInPage'
import SignUpPage from './Pages/SignUpPage'
import { AuthContextProvider } from './Context/AuthContextProvider'



function App() {
  const [count, setCount] = useState(0)

  return (
    <AuthContextProvider>
      <Routes>
          <Route path='/' element={<SignInPage/>}></Route>
          <Route path='/home' element={<Home/>}></Route>
          <Route path="/data/:id" element={<Details/>} />
          <Route path='/listpage' element={<ListPage/>}></Route>
          <Route path='/movie' element={<Movie/>}></Route>
          <Route path='/tvshow' element={<TvShow/>}></Route>
          <Route path='/game' element={<Game/>}></Route>
          <Route path='/search' element={<SearchPage/>}></Route>
          <Route path='/signup' element={<SignUpPage/>}></Route>             
      </Routes>
    </AuthContextProvider>
  )
}

export default App
