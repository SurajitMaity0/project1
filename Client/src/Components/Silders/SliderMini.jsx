import React, { useState, useEffect } from 'react'
import './Styles/SliderMini.sass'


// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';




import MiniBox from './MiniBox';
// import OpenPage from '../Moviesdetails/OpenPage';

const SliderMini = (props) => {
    // const [openPage,setOpenPage] = useState(false);
    const [slidesPerViews, setSlidesPerViews] = useState(7);
    const { data,tital} = props;

    // const handelOpenPage = ()=>{
    //     setOpenPage(true);
    // }

    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth > 1200) {
                setSlidesPerViews(7);
            } else if (window.innerWidth > 900) {
                setSlidesPerViews(5);
            } else if (window.innerWidth < 600) {
                setSlidesPerViews(3);
            } else {
                setSlidesPerViews(3);
            }
        };

        handleResize(); // Call the function initially

        window.addEventListener("resize", handleResize); // Add event listener for window resize

        return () => {
            window.removeEventListener("resize", handleResize); // Clean up the event listener on component unmount
        };
    }, []);

    return (
        <>
            <div className="slider-mini">
                <h2>{tital}</h2>
                <Swiper
                    slidesPerView={slidesPerViews}
                    spaceBetween={10}
              
                    className="mySwiper mini-slider"
                >
                    {data.map((item, index) => {
                        return (
                            <SwiperSlide className='slide' key={item.id}>
                                <MiniBox url={item.logo} name={item.name} veido_URl={item.veido_URl} />
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