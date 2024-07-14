import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import logo from '/logo123.png';
import './Header.sass';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faHouse, faCirclePlay, faTv, faGamepad,faHeart,faMicrophone, faCloudArrowDown, faCircleUser, faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import Search from './Search';

const Header = ({ user }) => {
  
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
              <Link to='/home'>
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
   
          <Search/>
   
          <div className="notifi">
            <span className="search-icon1"><FontAwesomeIcon icon={faMagnifyingGlass} /></span>
            {/* <span className='bell'><FontAwesomeIcon icon={faHeart} /></span>
            <span className='donwlod'><FontAwesomeIcon icon={faCloudArrowDown} /></span> */}
          </div>

          <div className="profile" onClick={handelopen}>
            <div className="user-icon">
              <FontAwesomeIcon icon={faCircleUser} />
            </div>
            <div className="user-name">name{user?.email}</div>
          </div>

        </div>
      </header >
    </>
  );
}

export default Header;
