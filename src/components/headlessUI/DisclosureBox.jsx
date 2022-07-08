import React from 'react'
import './headless.css'
import { Disclosure } from '@headlessui/react'
import {FiChevronUp} from 'react-icons/fi'


const DisclosureBox = ({title, disc}) => {
  return (
    <>
    <Disclosure>
          {({ open }) => (
            <>
              <Disclosure.Button className="disclosure-button">
                <FiChevronUp
                  className={`${
                    open ? 'disclosure-icondown' : ''
                  } disclosure-icon`}
                /><span>{title}</span>
              </Disclosure.Button>
              <Disclosure.Panel className="disclosure-disc">
                {disc}
              </Disclosure.Panel>
            </>
          )}
    </Disclosure>

    </>
  )
}

export default DisclosureBox