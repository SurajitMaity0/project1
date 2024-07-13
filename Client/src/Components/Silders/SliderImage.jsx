import React, { useState, useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
// import { Pagination } from 'swiper/modules';
import './Styles/SliderImage.sass';
import ImageBox from './ImageBox';
import { Link, NavLink } from 'react-router-dom';
import Details from '../Moviesdetails/Details';
const SliderImage = (props) => {
  const { data } = props;
  const [slidesPerViews, setSlidesPerViews] = useState(9);
  // Function to extract the ID from the fullId string
  const extractId = (fullId) => {
    const parts = fullId.split('/');
    return parts[2];
  };

  useEffect(() => {
    const handleResize = () => {
        if (window.innerWidth > 1200) {
            setSlidesPerViews(7);
        } else if (window.innerWidth > 900) {
            setSlidesPerViews(5);
        } else if (window.innerWidth < 600) {
            setSlidesPerViews(3);
        } else {
            setSlidesPerViews(4);
        }
    };

    handleResize(); // Call the function initially

    window.addEventListener("resize", handleResize); // Add event listener for window resize

    return () => {
        window.removeEventListener("resize", handleResize); // Clean up the event listener on component unmount
    };
}, []);

  return (
    <div className="sliderImage">
      <h2>Slider Image</h2>
      <Swiper
        slidesPerView={slidesPerViews}
        spaceBetween={5}
        // pagination={{ clickable: true }}
        // modules={[Pagination]}
        className="mySwiper"
      >
        {data.map((item) => (
          <SwiperSlide key={extractId(item.id)} >
            <NavLink to={`/data/${extractId(item.id)}`}>
              <ImageBox
                url={item.image?.url || ''}
                name={item.title}
                id={extractId(item.id)}
              />
            </NavLink>
          </SwiperSlide>
        ))}
      </Swiper>

    </div>
  );
};

export default SliderImage;
