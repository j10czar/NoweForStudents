import React from 'react'
import DisclosureBox from '../../components/general/DisclosureBox'


const FAQ = () => {
  return (
    <div className='home-container' id='faq'>
        <h1>FAQ</h1>

        <div className='faq-container'>
            <DisclosureBox  title="When are you planning on releasing?" disc="Since I am still a student, I dont have as much time as I would like to work on this. I am aiming for around early November 2022 for a beta release."/>
            <DisclosureBox  title="How can I sign up when it does release?" disc="On release an email will be sent out to whoever signed up for email notifications. You will be able to get started from there."/>
            <DisclosureBox title='Will there be an iOS app?'disc='Yes, I am planning on making an iOS app. I will make the web app first to test things out though.'/>
            



        </div>
    </div>
  )
}

export default FAQ