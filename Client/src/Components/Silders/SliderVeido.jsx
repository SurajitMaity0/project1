import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

import './Styles/SliderVeido.sass';

// import required modules
import { Pagination } from 'swiper/modules';

const SliderVeido = ()=> {
  return (
    <>
      <div className="SliderVeido">
        <h2>Movies veidos</h2>
      <Swiper
        slidesPerView={4}
        spaceBetween={15}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
        <SwiperSlide className='slide2'>Slide 1</SwiperSlide>
        <SwiperSlide className='slide2'>Slide 2</SwiperSlide>
        <SwiperSlide className='slide2'>Slide 3</SwiperSlide>
        <SwiperSlide className='slide2'>Slide 4</SwiperSlide>
        <SwiperSlide className='slide2'>Slide 5</SwiperSlide>
        <SwiperSlide className='slide2'>Slide 6</SwiperSlide>
        <SwiperSlide className='slide2'>Slide 7</SwiperSlide>
        <SwiperSlide className='slide2'>Slide 8</SwiperSlide>
        <SwiperSlide className='slide2'>Slide 1</SwiperSlide>
        <SwiperSlide className='slide2'>Slide 2</SwiperSlide>
        <SwiperSlide className='slide2'>Slide 3</SwiperSlide>
        <SwiperSlide className='slide2'>Slide 4</SwiperSlide>
        <SwiperSlide className='slide2'>Slide 5</SwiperSlide>
        <SwiperSlide className='slide2'>Slide 6</SwiperSlide>
        <SwiperSlide className='slide2'>Slide 7</SwiperSlide>
        <SwiperSlide className='slide2'>Slide 8</SwiperSlide>
        
      </Swiper>
      </div>
    </>
  );
}


export default SliderVeido;