import React from 'react'
import './Footer.css'
import {SiGithub} from 'react-icons/si'
import Banner from '../../assets/badge.png'

const Footer = () => {
  return (
    <footer>
      <img src={Banner} alt="nowe" className='footer-img' />{/* eslint-disable-line */}

      <ul className='permalinks'>
        <li><a href="#">About</a></li> {/* eslint-disable-line */}
        <li><a href="#howitworks">How it works</a></li>
        <li><a href="#features">Features</a></li>
        <li><a href="#faq">FAQ</a></li>

      </ul>


      <div className="footer_socials">
        <a href="https://github.com/j10czar"><SiGithub/></a>
      </div>

      <div className='footer_copyright'><small>&copy; 2022 Jason Tenczar. All rights reserved</small></div>
    </footer>
  )
}

export default Footer