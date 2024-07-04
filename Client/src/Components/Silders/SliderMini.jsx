import React from 'react'
import './Styles/SliderMini.sass'

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';



// import required modules
import { Pagination } from 'swiper/modules';
import MiniBox from './MiniBox';

const SliderMini = (props) => {

    const { data } = props;
    return (
        <>
            <div className="slider-mini">
                <h2>slider image</h2>
                <Swiper
                    slidesPerView={7}
                    spaceBetween={10}
                    pagination={{
                        clickable: true,
                    }}
                    modules={[Pagination]}
                    className="mySwiper mini-slider"
                >
                    {data.map((item, index) => {
                        return (
                            <SwiperSlide className='slide' key={item.id}>
                                <MiniBox url={item.logo} name={item.name} veido_URl={item.video_url} />
                            </SwiperSlide>
                        )

                    }
                    )}
                    
                </Swiper>
            </div>

        </>
    )
}

export default SliderMini;