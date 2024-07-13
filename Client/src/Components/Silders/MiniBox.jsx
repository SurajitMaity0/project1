import React, { useRef } from 'react';
import './Styles/SliderMini.sass'

import pixar from '../../assets/Pixar.mp4'
const MiniBox = (props) => {
  const videoRef = useRef(null);
  const handelclick = () => {
    console.log("clicked", props.id);
  };
  
    const handleMouseOver = () => {
      videoRef.current.play();
    };
    //dable click
    const handleDoubleClick = () => {
      videoRef.current.pause();
    }
    const handleMouseOut = () => {
      videoRef.current.pause();

    };
  
  

  return (
    <>
      <div className="mini-box" onClick={handelclick}>
        <img src={props.url} alt={props.name} />
        <div className="video-container">
          <video 
             ref={videoRef}
             onMouseOver={handleMouseOver}
             onMouseOut={handleMouseOut}
            onDoubleClick={handleDoubleClick}
            muted
              loop
          >
            <source src={pixar} type="video/mp4" />
          </video>
        </div>
      </div>
    </>
  )
}

export default MiniBox;