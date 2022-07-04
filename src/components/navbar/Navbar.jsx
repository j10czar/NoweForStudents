import './navbar.css'
import React from 'react'
import Banner from '../../assets/badge.png'
import { MobileNavLinks } from './mobileNavLinks'
import {DeviceSize} from "../responsive"
import { useMediaQuery } from "react-responsive";
import Hamburger from './Hamburger'

const Navbar = () => {

  const isMobile = useMediaQuery({maxWidth: DeviceSize.mobile})
  return (
    <div className='navbar-container'>
        <div className='navbar-left'>
            <div className='navbar-logowrapper'>
                <img src={Banner} alt="nowe" />
            </div>
        </div>
        <div className='navbar-middle'>
          {!isMobile && <div className='navbar-links'>
              <ul className='navbar-linkswrap'>
                <li className='navbar-linksitem'><a href="">About</a></li>
                <li className='navbar-linksitem'><a href="">Features</a></li>
                <li className='navbar-linksitem'><a href="">How it works</a></li>
                <li className='navbar-linksitem'><a href="">FAQ</a></li>
              </ul>
            </div>}
             
        </div>
        <div className='navbar-right'>

          {!isMobile && <div className='navbar-acc'><a href="" className='main-btnr'>Get Started</a><a href="" className='alt-btnr'>Log In</a> </div>}     
          {isMobile && <Hamburger/>}
        </div>

    </div>

    
  )
}

export default Navbar