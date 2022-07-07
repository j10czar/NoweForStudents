import './navbar.css'
import React from 'react'
import Banner from '../../assets/badge.png'
import { MobileNavLinks } from './mobileNavLinks'
import {DeviceSize} from "../responsive"
import { useMediaQuery } from "react-responsive";
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
                <li className='navbar-linksitem'><a href="#about">About</a></li>
                <li className='navbar-linksitem'><a href="#howitworks">How it works</a></li>
                <li className='navbar-linksitem'><a href="#features">Features</a></li>
                <li className='navbar-linksitem'><a href="#faq">FAQ</a></li>
              </ul>
            </div>}
             
        </div>
        <div className='navbar-right'>

          {!isMobile && <div className='navbar-acc'><a href="" className='main-btnr'>Notify Me</a> </div>}     
          {isMobile && <MobileNavLinks/>}
        </div>

    </div>

    
  )
}

export default Navbar