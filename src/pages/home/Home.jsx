import React from 'react'
import Navbar from "../../components/navbar/Navbar.jsx";
import About from './About.jsx';
import FAQ from './FAQ.jsx';
import Features from './Features.jsx';
import Footer from './Footer.jsx';
import './home.css'
import HowItWorks from './HowItWorks.jsx';
import Pattern from '../../assets/pattern.png'



const Home = () => {
  return (
    <>
      <Navbar />
      <About/>
      <HowItWorks/> 
      <Features/>   
      <FAQ/>
      <img src={Pattern} className='bg-image' alt='L'/>
      <Footer/>
    </>
  )
}

export default Home