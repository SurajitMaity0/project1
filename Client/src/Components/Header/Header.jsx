import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import logo from '../../assets/logo123.png';
import './Header.sass';
import Singup from '../LogIN/Singup';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faHouse, faCirclePlay, faTv, faGamepad, faGlobe, faBell,faMicrophone, faCloudArrowDown, faCircleUser, faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';

const Header = () => {
  
  const [showSingup, setShowSingup] = useState(false);
  const handelopen = () => {
    setShowSingup(true);
  };
  const handelClose = () => {
    setShowSingup(false);
  };


  return (
    <>
      <header>
        <div className="left-nav">
          <div className="menu-bar">
            <FontAwesomeIcon icon={faBars} />
          </div>
          <div className="logo">
            <img src={logo} alt="masti 60" />
          </div>
          <div className="nav">
            <ul>
              <Link to='/'>
                <li>
                  <span className='Hicons'><FontAwesomeIcon icon={faHouse} /></span>
                  Home
                </li>
              </Link>
              <Link to='/movie'>
                <li>
                  <span className='Micons'><FontAwesomeIcon icon={faCirclePlay} /></span>
                  Movie
                </li>
              </Link>
              <Link to='/tvshow'>
                <li>
                  <span className='Ticons'><FontAwesomeIcon icon={faTv} /></span>
                  Tv
                </li>
              </Link>
              <Link to='/game'>
                <li>
                  <span className='Gicons'><FontAwesomeIcon icon={faGamepad} /></span>
                  Games
                </li>
              </Link>
            </ul>
          </div>
        </div>
        <div className="right-nav">
          <div className="search">
            <span className='mic'><FontAwesomeIcon icon={faMicrophone} /></span>
            <input
              type="text"
              placeholder="Search"
              

            />
            <div className='search-buts'><FontAwesomeIcon icon={faMagnifyingGlass} /></div>

          </div>
          <div className="notifi">
            <span className='language'><FontAwesomeIcon icon={faGlobe} /></span>
            <span className='bell'><FontAwesomeIcon icon={faBell} /></span>
            <span className='donwlod'><FontAwesomeIcon icon={faCloudArrowDown} /></span>
          </div>
          <div className="profile" onClick={handelopen}>
            <div className="user-icon"><FontAwesomeIcon icon={faCircleUser} /></div>
            <div className="user-name">surajit maity</div>
          </div>

        </div>
        {showSingup && <Singup handelClose={handelClose}/>}




      </header >
    </>
  );
}

export default Header;
