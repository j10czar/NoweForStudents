import React from 'react'
// import './signin.css'
import meshBG2 from '../../assets/meshbg2.jpg'
import whiteNowe from '../../assets/whiteicon.png'
import Login from './login'

const Signin = () => {
  return (
    <> 
        <img className='meshBG' src={meshBG2} alt="L" />
        <img className='whiteNowe' src={whiteNowe} alt="L" />

        <div className='main-panel'><Login/></div>
    </>
  )
}

export default Signin