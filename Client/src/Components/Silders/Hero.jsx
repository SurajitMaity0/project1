import React from 'react'
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import './Styles/Hero.sass';
// import required modules
import { Navigation } from 'swiper/modules';
// import required modules
import { Pagination } from 'swiper/modules';
import HeroBox from './HeroBox';
import data from '../../assets/data3.json'

const Hero = () => {

  return (
    <div className='Hero'>
      <Swiper
        navigation={true} 
        pagination={{
          dynamicBullets: true,
        }}
        modules={[Pagination,Navigation]}
        className="mySwiper"
      >
        {data.map((item, index) => {
   
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