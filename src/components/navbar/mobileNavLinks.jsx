import React, { useState } from "react";
import { MenuToggle } from "./MenuToggle";
import './mobilenavlinks.css'
import { Transition } from '@headlessui/react'






export function MobileNavLinks({className}) {

  const [isOpen, setOpen] = useState(false);
  

  return (
    <>

    <MenuToggle isOpen={isOpen} toggle={() => setOpen(!isOpen) } />
    {/* {isOpen && <div className='mnavbar-links'>
                <ul className='mnavbar-linkswrap'>
                  <li className='mnavbar-linksitem'><a href="#about">About</a></li>
                  <li className='mnavbar-linksitem'><a href="#howitworks">How it works</a></li>
                  <li className='mnavbar-linksitem'><a href="#features">Features</a></li>
                  <li className='mnavbar-linksitem'><a href="#faq">FAQ</a></li>
                  <li className="mnavbar-linksitem mnavbar-linksitembtn"><a href="" className='main-btnr'>Notify Me</a></li>
                </ul>
                
      </div>} */}

        <Transition
        show={isOpen}
        enter="transition-opacity"
        enterFrom="opacity-0"
        enterTo="opacity-100"
        leave="transition-opacity"
        leaveFrom="opacity-100"
        leaveTo="opacity-0">
          <div className='mnavbar-links'>
                <ul className='mnavbar-linkswrap'>
                  <li className='mnavbar-linksitem'><a href="#about">About</a></li>
                  <li className='mnavbar-linksitem'><a href="#howitworks">How it works</a></li>
                  <li className='mnavbar-linksitem'><a href="#features">Features</a></li>
                  <li className='mnavbar-linksitem'><a href="#faq">FAQ</a></li>
                  <li className="mnavbar-linksitem mnavbar-linksitembtn"><a href="" className='main-btnr'>Notify Me</a></li>
                </ul>
                
          </div>
        
        
      </Transition>



      
      
    
    </>

  );
}