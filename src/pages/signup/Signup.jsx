import React from 'react'
import './signup.css'
import meshBG1 from '../../assets/meshbg1.jpg'
import Step1 from './Step1'
import whiteNowe from '../../assets/whiteicon.png'

const Signup = () => {
  return (
    <>
        <img className='meshBG' src={meshBG1} alt="L" />
        <img className='whiteNowe' src={whiteNowe} alt="L" />

        <div className='main-panel'><Step1/></div>
        

    </>
  )
}

export default Signup