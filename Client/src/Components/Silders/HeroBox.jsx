import React, { useContext, useState } from 'react'
import './Styles/HeroBox.sass'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus, faCirclePlay, faCloudArrowDown } from '@fortawesome/free-solid-svg-icons'
import VideoModal from './VideoModal'
import MainContext from '../../Context/MainContext'
import axios from 'axios';

const HeroBox = (props) => {
  const { data1 } = props;
  const data = data1.movieData;

  const isSmallScreen = () => {
    if (window.innerWidth < 600) {
      return true;
    }
    else if (window.innerWidth > 600) {
      return false;
    }
    else
    {
      return false;
    }
  }

  const { setIsVideoModalOpen, setVideoUrl } = useContext(MainContext);
  const openVideoModal = async () => {
    const videoId = data.trailers[0].id;
    console.log(videoId);
    setIsVideoModalOpen(true);
    
    try{
      const response = await axios.get(`http://localhost:3000/video/${videoId}`);
      const url = response.data.VideoPlay[1].url;
      console.log(url);
      setVideoUrl(url);
    }catch(err){
      console.log(err.message);
    }
     // fetch the video url and set
  } 

  return (
    <>
        
        <div className='HeroBox'>
          <div className="bg-img">
            <img src={isSmallScreen() ? data.contentDetails.title.image.url : data.images[0].url} alt={data.contentDetails.title.title} />          
          </div>
          <div className="gr-bg">
            {/* this is for titale gradiant banckground  */}
          </div>
        <div className="tital">
          <div className="ti-bg"></div>
          <div className="content-poster">
            <img src={data.contentDetails.title.image.url} alt={data.contentDetails.title.title} />
          </div>
          <div className="content-text">
            <h1 className='movie-name'>{data.contentDetails.title.title}</h1>
            <div className="cata">
              <p className="year">{data.contentDetails.title.year}</p>
              <p className="genre">{data.contentDetails.genres[2]}</p>
              <p className="rating">{data.contentDetails.ratings.rating}</p>
              <p className="time">{data.contentDetails.title.runningTimeInMinutes}M</p>
            </div>
            <p className="description">{data.contentDetails.plotOutline.text}</p>
            <div className="open">
              <button className='save'><FontAwesomeIcon icon={faPlus} /></button>
              <button className='play' onClick={openVideoModal}>
                <FontAwesomeIcon icon={faCirclePlay} /> Play Now
              </button>
              <button className='donwlod'><FontAwesomeIcon icon={faCloudArrowDown} /></button>
            </div>
          </div>
        </div>
      </div>  

    </>
  )
}





export default HeroBox;