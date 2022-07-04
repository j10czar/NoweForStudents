import React, { useState } from "react";
import { MenuToggle } from "./MenuToggle";
import './mobilenavlinks.css'
import { CSSTransition } from 'react-transition-group';


export function MobileNavLinks(props) {
  const [isOpen, setOpen] = useState(false);

  return (
    <div className="mnavbar-container">
        <MenuToggle isOpen={isOpen} toggle={() => setOpen(!isOpen)} />

        {isOpen && (
          <div className='mnavbar-links'>
              <ul className='mnavbar-linkswrap'>
                <li className='mnavbar-linksitem'><a href="">About</a></li>
                <li className='mnavbar-linksitem'><a href="">Features</a></li>
                <li className='mnavbar-linksitem'><a href="">How it works</a></li>
                <li className='mnavbar-linksitem'><a href="">FAQ</a></li>
                <li className="mnavbar-linksitem mnavbar-linksitembtn"><a href="" className='main-btnr mnavbar-btn'>Get Started</a><a href="" className='alt-btnr mnavbar-btn'>Log In</a></li>
              </ul>
              
          </div>
)}
        
        
        
         

    </div>
  );
}