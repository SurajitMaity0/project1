import React from 'react'
import './styles/Footer.sass'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <>
        <div className='Footer'>
            <div className="maitytv">
                <h1>MaityTv</h1>
                <ul>
                    <Link to='/home'><li>Home</li></Link>
                    <Link to='/movie'><li>Movie</li></Link>
                    <Link to='/tvshow'><li>TV Show</li></Link>
                    <Link to='/game'><li>Game</li></Link>
                </ul>
            </div>
            <div className="about">
                <h1>About</h1>
                <ul>
                    <li>Our Story</li>
                    <li>FAQ</li>
                    <li>Terms & Conditions</li>
                </ul>
            </div>
            <div className="contact">
                <h1>Contact</h1>
                <ul>
                    <li>Facebook</li>
                    <li>Twitter</li>
                    <li>Instagram</li>
                </ul>
            </div>
        </div>
        <div className="copy-right">
                <h1>© 2021 MaityTv. All Rights Reserved</h1>
        </div>
    </>
  )
}

export default Footer