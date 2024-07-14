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
  console.log(data);
  return (
    <div className='Hero'>
      <Swiper
        pagination={{
          dynamicBullets: true,
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
        {data.map((item, index) => {
          console.log("this is",item);
          return (

            <SwiperSlide key={index}>
              <HeroBox data1={item} />
            </SwiperSlide>
          )

        }
        )}
        
      </Swiper>
    </div>
  );
}

export default Hero;