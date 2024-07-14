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
import ErrorPage from './Pages/ErrorPage'
import { AuthContextProvider } from './Context/AuthContextProvider'
import ProtectedRoute from './Components/ProtectedRoute'



function App() {
  const [count, setCount] = useState(0)

  return (
    <AuthContextProvider>
      <Routes>
          <Route path='/' element={<SignInPage/>}></Route>
          <Route path='/home' element={<ProtectedRoute><Home/></ProtectedRoute>}></Route>
          <Route path="/data/:id" element={<ProtectedRoute><Details/></ProtectedRoute>} />
          <Route path='/listpage' element={<ListPage/>}></Route>
          <Route path='/movie' element={<ProtectedRoute><Movie/></ProtectedRoute>}></Route>
          <Route path='/tvshow' element={<ProtectedRoute><TvShow/></ProtectedRoute>}></Route>
          <Route path='/game' element={<ProtectedRoute><Game/></ProtectedRoute>}></Route>
          <Route path='/search' element={<ProtectedRoute><SearchPage/></ProtectedRoute>}></Route>
          <Route path='/signup' element={<SignUpPage/>}></Route>
          <Route path="/*" element={<ErrorPage/>}></Route>             
      </Routes>
    </AuthContextProvider>
  )
}

export default App
