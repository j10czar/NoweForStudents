import React from 'react'
import './headless.css'
import { Transition } from '@headlessui/react'


const Modal = ({isOpen, setIsOpen, title, disc}) => {

    function closeModal() {
        setIsOpen(false)
      }
    
      function openModal() {
        setIsOpen(true)
      }
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
            <h2 className='modal-title'>{title}</h2>
            <p>{disc}</p>
            <button type='button' className='main-btn modal-btn' onClick={()=>closeModal()}>Ok</button>





          </div>
        </div>






       </Transition>    
    </>
    
  )
}

export default Modal