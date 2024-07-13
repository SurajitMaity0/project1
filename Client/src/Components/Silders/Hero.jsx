import React from 'react'
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

import './Styles/Hero.sass';

// import required modules
import { Pagination } from 'swiper/modules';
import HeroBox from './HeroBox';
import data from '../../assets/data3.json'

const Hero = () => {
  return (
    <div className='Hero'>
      <Swiper
        pagination={{
          dynamicBullets: true,
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
        <SwiperSlide><HeroBox data1 = {data} /></SwiperSlide>
        <SwiperSlide><HeroBox data1 = {data} /></SwiperSlide>
        <SwiperSlide><HeroBox data1 = {data} /></SwiperSlide>
        <SwiperSlide><HeroBox data1 = {data} /></SwiperSlide>
        <SwiperSlide><HeroBox data1 = {data} /></SwiperSlide>
        <SwiperSlide><HeroBox data1 = {data} /></SwiperSlide>
      </Swiper>
    </div>
  );
}

export default Hero;