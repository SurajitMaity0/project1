import React, { useState } from 'react'
import './Styles/SliderMini.sass'


// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';




import MiniBox from './MiniBox';
import OpenPage from '../Moviesdetails/OpenPage';

const SliderMini = (props) => {
    const [openPage,setOpenPage] = useState(false);
    const { data } = props;

    const handelOpenPage = ()=>{
        setOpenPage(true);
    }

    return (
        <>
            <div className="slider-mini">
                <h2></h2>
                <Swiper
                    slidesPerView={7}
                    spaceBetween={10}
              
                    className="mySwiper mini-slider"
                >
                    {data.map((item, index) => {
                        return (
                            <SwiperSlide className='slide' key={item.id} onClick={handelOpenPage}>
                                <MiniBox url={item.logo} name={item.name} veido_URl={item.veido_URl} />
                            </SwiperSlide>
                        )

                    }
                    )}
                    
                </Swiper>
                {openPage && <OpenPage/>}
            </div>

        </>
    )
}

export default SliderMini;