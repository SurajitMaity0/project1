import React from 'react'
import './MobileMenu.sass'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faHouse, faCirclePlay, faTv, faGamepad,faHeart, faCloudArrowDown, faCircleUser, faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';


const MobileMenu = () => {
  return (
    <div className='mobile-menu'>
      <Link to='/home'><FontAwesomeIcon icon={faHouse} /></Link>
      <Link to='/movie'><FontAwesomeIcon icon={faCirclePlay} /></Link>
      <Link to='/tvshow'><FontAwesomeIcon icon={faTv} /></Link>
      <Link to='/game'><FontAwesomeIcon icon={faGamepad} /></Link>
    </div>
  )
}

export default MobileMenu