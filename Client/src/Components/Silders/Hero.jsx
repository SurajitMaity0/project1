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
        <SwiperSlide><HeroBox/></SwiperSlide>
        <SwiperSlide><HeroBox/></SwiperSlide>
        <SwiperSlide><HeroBox/></SwiperSlide>
        <SwiperSlide><HeroBox/></SwiperSlide>
        <SwiperSlide><HeroBox/></SwiperSlide>
        <SwiperSlide><HeroBox/></SwiperSlide>
        <SwiperSlide><HeroBox/></SwiperSlide>
        <SwiperSlide><HeroBox/></SwiperSlide>
        <SwiperSlide><HeroBox/></SwiperSlide>
      </Swiper>
    </div>
  );
}

export default Hero;