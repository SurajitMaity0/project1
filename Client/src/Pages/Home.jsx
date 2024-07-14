import React, { useContext } from 'react';
import './styles/Home.sass'
import { Header, Hero, SliderMini, SliderImage, SliderVeido } from '../Components';
import MainContext from '../Context/MainContext.js';

import companyData from '../assets/catagori.json';
import { UserAuth } from '../Context/AuthContext.js';

const Home = () => {

  const {data} = useContext(MainContext);
  console.log(data);
  const tvSeries = [];
  const movies = [];
  const newRelese = [];
  const year2021 = [];
  const year2019 = [];
  data.map((i) => {
    if(i.titleType === 'tvSeries'){
      tvSeries.push(i);
    }
    if(i.titleType === 'movie'){
      movies.push(i);
    }
    if(i.year >= 2024 && i.year <= 2025){
      newRelese.push(i);
    }
    if(i.year >= 2021 && i.year <= 2023){
      year2021.push(i);
    }
    if(i.year >= 2019 && i.year <= 2020){
      year2019.push(i);
    }
  });

    // comapany data desturcher
    const {channels,companies} = companyData;

    const { user, logout } = UserAuth();

  return (
    <>
      <div className='Home'>
          <Header user={user} />
          {/* <CharacterSlider/> */}
          <Hero/>
          <SliderMini data={channels} tital= "TV Channels"/>
          <SliderImage data={newRelese} tital = "Latest Releases" />
          <SliderMini data={companies} tital="Animation  Studios"/>
          <SliderImage data={year2021} tital = "Popular shows" />
          <SliderImage data={year2019} tital = "Top rated" />
          
      
          

          
      </div>
     </>
  )
}

export default Home;