import React from 'react'

import {MdSportsFootball} from 'react-icons/md'
import {HiBeaker} from 'react-icons/hi'
import {MdWork} from 'react-icons/md'

const HowItWorks = () => {
  return (
    <div className='home-container' id='howitworks'>
        <h1>How it works</h1>
        <div className='home-howcontainer'>
            <p>Nowe uses cards to easily separate tasks into key areas of the user’s life. For example, you could make a card for your class, your sport, or your work. Nowe can also take into account when you focus best to send notifications at the perfect time to study or get things done.</p>
            <div className='home-howcardcontainer'>
                <div className='home-howcard1'><MdWork/><span>Work</span></div>

                <div className='home-howcard2'><HiBeaker/><span>AP Chem</span></div>
                <div className='home-howcard3'><MdSportsFootball/><span>Football</span></div>
            </div>
        </div> 
    
    
    
    
    </div>


  )
}

export default HowItWorks