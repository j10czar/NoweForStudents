import React from 'react'
import './signup.css'
import meshBG from '../../assets/meshbg.jpg'
import Step1 from './Step1'
import whiteNowe from '../../assets/whiteicon.png'

const Signup = () => {
  return (
    <>
        <img className='meshBG' src={meshBG} alt="L" />
        <img className='whiteNowe' src={whiteNowe} alt="L" />

        <div className='main-panel'><Step1/></div>
        

    </>
  )
}

export default Signup