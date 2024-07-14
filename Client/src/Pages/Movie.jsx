import React, { useContext } from 'react'
import './styles/Movie.sass'

import { Header, Hero, SliderImage, SliderMini, SliderVeido } from '../Components/index.js'
import MainContext from '../Context/MainContext.js'
import companyData from '../assets/catagori.json';
import MobileMenu from '../Components/MobileMenu/MobileMenu.jsx';
import Footer from './Footer.jsx';
const Movie = () => {
 
  const { data } = useContext(MainContext);
  const tvSeries = [];
  const movies = [];
  const newRelese = [];
  const year2021 = [];
  const year2019 = [];
  data.map((i) => {
    if (i.titleType === 'tvSeries') {
      tvSeries.push(i);
    }
    if (i.titleType === 'movie') {
      movies.push(i);
    }
    if (i.year >= 2024 && i.year <= 2025) {
      newRelese.push(i);
    }
    if (i.year >= 2021 && i.year <= 2023) {
      year2021.push(i);
    }
    if (i.year >= 2019 && i.year <= 2020) {
      year2019.push(i);
    }
  });


  const { channels, companies } = companyData;
  return (
    <>
      <div className="movies">
        <Header />
        <Hero />
        <SliderMini data={companies} />
        <SliderImage data={movies} />
        <SliderImage data={newRelese} tital="Latest Releases" />
        <SliderMini data={companies} tital="Animation  Studios" />
        <SliderImage data={year2021} tital="Popular shows" />
        <SliderImage data={year2019} tital="Top rated" />

        <Footer />
      </div>
      {
        window.screen.width < 765 && <MobileMenu />
      }
    </>
  )
}

export default Movie