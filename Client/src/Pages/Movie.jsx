import React, { useContext } from 'react'
import './styles/Movie.sass'

import {Header, Hero, SliderImage} from '../Components/index.js'
import MainContext from '../Context/MainContext.js'
const Movie = () => {

  const {contentInfo} = useContext(MainContext);

  console.log("moviescontext apidata",contentInfo);

  
  return (
    <>
      <div className="movies">
        <Header/>
        <Hero/>
    



      </div>
    </>
  )
}

export default Movie