import React from 'react'
import './Styles/HeroBox.sass'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import { faPlus, faCirclePlay, faCloudArrowDown } from '@fortawesome/free-solid-svg-icons'
const HeroBox = (props) => {
  const { data1 } = props;
  const data = data1.movieData;

  const isSmallScreen = () => {
    if (window.innerWidth < 600) {
      console.log('small screen');
      return true;
    }
    else if (window.innerWidth > 600) {
      console.log('big screen');
      return false;
    }
    else
    {
      console.log('no screen');
      return false;
    }

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
              <button className='play'><span><FontAwesomeIcon icon={faCirclePlay} /></span> Play Now</button>
              <button className='donwlod'><FontAwesomeIcon icon={faCloudArrowDown} /></button>
            </div>
          </div>
        </div>
      </div>  

    </>
  )
}





export default HeroBox;