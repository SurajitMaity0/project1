import React from 'react'
import './Styles/HeroBox.sass'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus, faCirclePlay, faCloudArrowDown } from '@fortawesome/free-solid-svg-icons'
const HeroBox = () => {
  return (
    <>
    <div className='HeroBox'>
        <div className="bg-img">
          <img src="https://imgs.search.brave.com/3Md0-FwWZSNalDISxzQ3L898QoD_GkaR79EIVRj2prM/rs:fit:860:0:0/g:ce/aHR0cHM6Ly92YXJp/ZXR5LmNvbS93cC1j/b250ZW50L3VwbG9h/ZHMvMjAyNC8wNS9n/YXJmaWVsZC5qcGc_/dz0xMDAwJmg9NjY3/JmNyb3A9MQ" alt="movies" />          
        </div>    
       <div className="tital">
          <div className="content-poster">
            <img src="https://imgs.search.brave.com/GHw8o0RcOsPI68oE47ZHHHi3_CCK6NEYtCmz4KysCjo/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9zMy5h/bWF6b25hd3MuY29t/L3N0YXRpYy5yb2dl/cmViZXJ0LmNvbS91/cGxvYWRzL21vdmll/L21vdmllX3Bvc3Rl/ci90aGUtZ2FyZmll/bGQtbW92aWUtMjAy/NC9sYXJnZV9NVjVC/TVdKa09HSmlOR0l0/WXpGbVppMDBPREV4/TFdFMU5ERXRPV1F5/TnpoaFl6bGpPRFZp/WGtFeVhrRnFjR2Rl/UVhWeU1UWTNPRGt5/TkRrei5fVjFfLmpw/Zw" alt="poster" />
          </div>
          <div className="content-text">
            <h1 className='movie-name'>The Garfield Movie</h1>
            <div className="cata">
              <p className="year">2024</p>
              <p className="genre">Comedy, Family, Animation</p>
              <p className="rating">Rating: 6.4</p>
              <p className="time">1h 30m</p>
            </div>
            <p className="description">Garfield, the fat, lazy, lasagna lover, has everything a cat could want. But when Jon, in an effort to impress the Liz - the vet and an old high-school crush - adopts a dog named Odie and brings him home, Garfield gets the one thing he doesn't want. Competition.</p>
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