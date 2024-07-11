import React, { useContext } from 'react'
import {Header, Hero, SliderImage,SliderMini} from '../Components/index.js'
import MainContext from '../Context/MainContext.js'
import companyData from '../assets/catagori.json';
import './styles/TvShow.sass'

const TvShow = () => {
  
  const TvShow = [];

  const {data} = useContext(MainContext);
  data.map((i) => {
    if(i.titleType === 'tvSeries'){
      TvShow.push(i);
    }
  });
  const {channels,companies} = companyData;
  return (
    <>
      <div className="Tvshows">
        
      <Header/>
      <Hero/>
      <SliderMini data={channels}/>
      <SliderImage data={TvShow}/>
      
      </div>
    </>
  )
}

export default TvShow;