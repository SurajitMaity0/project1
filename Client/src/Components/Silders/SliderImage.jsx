import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import './Styles/SliderImage.sass';
import { Pagination } from 'swiper/modules';
import ImageBox from './ImageBox';
import { Link } from 'react-router-dom';

const SliderImage = (props) => {
  const { data } = props;

  // Function to extract the ID from the fullId string
  const extractId = (fullId) => {
    const parts = fullId.split('/');
    return parts[2];
  };

  return (
    <div className="sliderImage">
      <h2>Slider Image</h2>
      <Swiper
        slidesPerView={9}
        spaceBetween={5}
        pagination={{ clickable: true }}
        modules={[Pagination]}
        className="mySwiper"
      >
        {data.map((item) => (
          <SwiperSlide key={extractId(item.id)}>
            <Link to={`/data/${extractId(item.id)}`}>
              <ImageBox
                url={item.image.url}
                name={item.title}
                id={extractId(item.id)}
              />
            </Link>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default SliderImage;