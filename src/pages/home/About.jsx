import React from 'react'
import './home.css'
import Image from '../../assets/placeholder.png'

import { useState } from 'react'
import EModal from '../../components/headlessUI/EModal'


const About = () => {

  let [isOpen, setIsOpen] = useState(false)

  return (
    <div className='home-container' id='about'>
        <h1>An organization app built for students by a student</h1>
        <div className='home-introp'>
        <p>Nowe is a card-based organization app that allows students to effortlessly
            keep track of tasks and responsibilities from different areas of their lives. </p>
            <p>(Coming soon)</p>
            </div>

           

        <div className='home-mainbtns'><button className='main-btn notif' type='button' onClick={()=>setIsOpen(!isOpen)}>Notify Me</button></div>
        <EModal isOpen={isOpen} setIsOpen={setIsOpen}/>

        <img className='rimg home-abtimg' src={Image} alt="L" />
        <p>(Image above is a prototype and will most likely be changed)</p>

        

      </div>

    
  )
}

export default About