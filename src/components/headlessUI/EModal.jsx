import React from 'react'
import './headless.css'
import { Transition } from '@headlessui/react'
import { useRef } from 'react';
import emailjs from 'emailjs-com'


const EModal = ({isOpen, setIsOpen}) => {

    function closeModal() {
        setIsOpen(false)
      }
    
      // function openModal() {
      //   setIsOpen(true)
      // }

      const form = useRef()
  
      const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_wr8ugu2', 'template_goxmdit', form.current, 'J0XYEDOhMiHwvnPri')
          e.target.reset()
          closeModal()
        };
  return (
    <>
       <Transition
       show={isOpen}
       enter="transition-opacity"
       enterFrom="opacity-0"
       enterTo="opacity-100"
       leave="transition-opacity"
       leaveFrom="opacity-100"
       leaveTo="opacity-0">
        <div className='bg-modal'>
          <div className='modal-panel'>
            <h2 className='modal-title'>Sign up for updates</h2>

            <form ref={form} onSubmit={sendEmail}>

              <div className='modal-inputbox'><label htmlFor='email'>Email address:</label>
              <input type="email" className='text-field' name='email' id='email' required/></div>
              <div className='modal-btnbox'>
                  <button type='submit' className='main-btn'>Sign me up</button>
                  <button type='button' className='alt-btn' onClick={()=>closeModal()}>Cancel</button>
              </div>

            </form>


          </div>
        </div>






       </Transition>    
    </>
    
  )
}

export default EModal