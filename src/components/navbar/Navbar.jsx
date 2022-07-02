import './navbar.css'
import React from 'react'
import Banner from '../../assets/badge.png'

const Navbar = () => {
  return (
    <div className='navbar-container'>
        <div className='navbar-left'>
            <div className='navbar-logowrapper'>

                <img src={Banner} alt="nowe" />
            </div>
        </div>
        <div className='navbar-middle'></div>
        <div className='navbar-right'></div>
    </div>
  )
}

export default Navbar