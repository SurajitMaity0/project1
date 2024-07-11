import React, { useContext } from 'react'
import './styles/Movie.sass'

import {Header, Hero, SliderImage, SliderMini, SliderVeido} from '../Components/index.js'
import MainContext from '../Context/MainContext.js'
import companyData from '../assets/catagori.json';
const Movie = () => {
  const movies = [];

  const {data} = useContext(MainContext);
  data.map((i) => {
    if(i.titleType === 'movie'){
      movies.push(i);
    }
  });


  const {channels,companies} = companyData;
  return (
    <>
      <div className="movies">
        <Header/>
        <Hero/>
        <SliderMini data={companies}/>
        <SliderImage data={movies}/>
        


      </div>
    </>
  )
}

export default Movie