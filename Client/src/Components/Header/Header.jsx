import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import logo from '/logo123.png';
import './Header.sass';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faHouse, faCirclePlay, faTv, faGamepad,faHeart, faCloudArrowDown, faCircleUser, faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import Search from './Search';
import { UserAuth } from '../../Context/AuthContext';

const Header = ({ user }) => {  
  const [isOpen, setIsOpen] = useState(false);
  const toggleUserDetails = () => {
    setIsOpen(!isOpen);
  }
  
  const navigate = useNavigate();
  const {logOut} = UserAuth();
  const handleSignOut = () => {
    try{
      logOut();
      navigate('/');
    }catch(error){
      console.log(error.message);
    }
  }

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
          </div>

          {isOpen &&           
            <div className='user-details'>
              <div className="user-name">Email: {user?.email}</div>
              <div className='favorites'>
                <FontAwesomeIcon icon={faHeart} />
                <span>Favorites</span>
              </div>
              <div className='downloads'>
                <FontAwesomeIcon icon={faCloudArrowDown} />
                <span>Downloads</span>
              </div>
              <button className='signout-btn' onClick={handleSignOut}>Sign Out</button>
            </div>
          }

          <div className="profile" onClick={toggleUserDetails}>
            <div className="user-icon">
              <FontAwesomeIcon icon={faCircleUser} />
            </div>
          </div>

        </div>
      </header >
    </>
  );
}

export default Header;
