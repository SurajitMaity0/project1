import React, { useContext } from 'react';
import './styles/Home.sass'
import { Header, Hero, SliderMini, SliderImage, SliderVeido, Singup } from '../Components';
import MainContext from '../Context/MainContext.js';

import companyData from '../assets/catagori.json';

import CharacterSlider from '../Components/Characters/CharacterSlider.jsx';
const Home = () => {

  const {data} = useContext(MainContext);

  const tvSeries = [];
  const movies = [];
  const year1990 = [];
  const year2000 = [];
  data.map((i) => {
    console.log(i.title);
    if(i.titleType === 'tvSeries'){
      tvSeries.push(i);
    }
    if(i.titleType === 'movie'){
      movies.push(i);
    }
    if(i.year >= 1500 && i.year <= 1990){
      year1990.push(i);
    }
    if(i.year >= 1990 && i.year <= 2000){
      year2000.push(i);
    }
  });

    // comapany data desturcher
    const {channels,companies} = companyData;
  return (
    <>
      <div className='Home'>
          <Header/>
          {/* <CharacterSlider/> */}
          <Hero/>
          <SliderMini data={channels}/>
          <SliderVeido/>
          <SliderImage data={tvSeries} />
          <SliderMini data={companies}/>
          <SliderImage data={movies} />
          <SliderVeido/>
          <SliderImage data={year1990} />
          <SliderImage data={year2000} />
          <SliderVeido/>
          <SliderImage data={year1990} />
          <SliderVeido/>
          <SliderImage data={year2000} />
      
          

          
      </div>
     </>
  )
}

export default Home;