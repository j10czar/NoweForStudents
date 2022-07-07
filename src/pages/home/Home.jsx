import React from 'react'
import Navbar from "../../components/navbar/Navbar.jsx";
import About from './About.jsx';
import FAQ from './FAQ.jsx';
import Features from './Features.jsx';
import Footer from './Footer.jsx';
import './home.css'
import HowItWorks from './HowItWorks.jsx';



const Home = () => {
  return (
    <>
      <Navbar />
      <About/>
      <HowItWorks/> 
      <Features/>   
      <FAQ/>
      <Footer/>
    </>
  )
}

export default Home