import React from 'react'
import './home.css'
import Image from '../../assets/placeholder.png'
import { Dialog } from '@headlessui/react'
import { useState } from 'react'

const About = () => {

  let [isOpen, setIsOpen] = useState(false)

  return (
    <div className='home-container' id='about'>
        <h1>An organization app built for students by a student</h1>
        <div className='home-introp'>
        <p>Nowe is a card-based organization app that allows students to effortlessly
            keep track of tasks and responsibilities for different areas of their lives. </p>
            <p>(Demo releasing November 1st)</p>
            </div>

           

        <div className='home-mainbtns'><a className='main-btn' >Notify Me</a></div>

        <img className='rimg home-abtimg' src={Image} alt="No image" />
        <p>(Image above is a prototype and will most likely be changed)</p>

        

      </div>

    
  )
}

export default About