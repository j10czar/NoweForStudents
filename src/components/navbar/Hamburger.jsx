import React from 'react'
import { MobileNavLinks } from './mobileNavLinks'
import { MenuToggle } from './MenuToggle'
import { useState } from 'react'
import { motion, AnimatePresence} from "framer-motion"



const Hamburger = () => {

    const [isOpen, setOpen] = useState(false);

    // const transition = useTransition(isOpen,{
    //     from: {y:200, opacity: 0},
    //     enter:{y:200,opacity: 1},
    //     leave:{y:0,opacity: 0},
    // })
  return (
    <>

        <MenuToggle isOpen={isOpen} toggle={() => setOpen(!isOpen) } />

        {/* <div>
            {transition((style,item)=> item ? <animated.div style={style} className = "item"><MobileNavLinks/></animated.div> : ''

            )}
        </div> */}

        <AnimatePresence>
            {isOpen &&<MobileNavLinks/> }
            {/* {isOpen && <motion.div initial={{opacity:0,y:'-50%'}} animate={{opacity:1,y:'0%'}} exit={{opacity:0,y:'-50%'}}><MobileNavLinks/></motion.div>} */}
        </AnimatePresence>

        {/* {isOpen ? <MobileNavLinks/> : ''} */}

        {/* <MobileNavLinks className={isOpen ? 'mnavbar-shown': '.mnavbar-hidden'}/> */}

        
        
    </>

  )
}

export default Hamburger