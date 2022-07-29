import React, { useState } from "react";
import { MenuToggle } from "./MenuToggle";
import './mobilenavlinks.css'






export function MobileNavLinks({className, isModal, setModal}) {

  const [isOpen, setOpen] = useState(false);
  

  return (
    <>

    <MenuToggle isOpen={isOpen} toggle={() => setOpen(!isOpen) } />
    {isOpen && <div className='mnavbar-links'>
                <ul className='mnavbar-linkswrap'>
                  <li className='mnavbar-linksitem'><a href="#about">About</a></li>
                  <li className='mnavbar-linksitem'><a href="#howitworks">How it works</a></li>
                  <li className='mnavbar-linksitem'><a href="#features">Features</a></li>
                  <li className='mnavbar-linksitem'><a href="#faq">FAQ</a></li>
                  <li className="mnavbar-linksitem mnavbar-linksitembtn"><button className='main-btn' type='button' onClick={()=>{setModal(!isModal); setOpen(false)}}>Notify Me</button></li>
                </ul>
                
      </div>}
  
    
    </>

  );
}