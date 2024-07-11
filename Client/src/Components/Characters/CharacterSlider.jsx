import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';


import './Character.sass'

import data from '../../assets/carecter.json'
const CharacterSlider = () => {

    const data1 = data.characters
    
    

    console.log(data1);
    return (
        <>
            <div className='CharacterSlider'>
                <Swiper
                    slidesPerView={12}
                    spaceBetween={30}
                  
                    className="mySwiper"
                >
               
                    {data1.map((item) => (
                        <SwiperSlide key={item.id}  className='CharacterBox'>
                            <div className='Character'>
                                <img src={item.character_image_url} alt={item.character_name}/>
                                {/* <h3>{item.character_name}</h3> */}
                            </div>
                        </SwiperSlide>
                    ))}

      
                </Swiper>
            </div>
        </>
    )
}

export default CharacterSlider;