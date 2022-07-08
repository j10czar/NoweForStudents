import React from 'react'
import {BiBookBookmark} from 'react-icons/bi'
import {FiBell} from 'react-icons/fi'
import {BiListOl} from 'react-icons/bi'
import {GoGraph} from 'react-icons/go'
import {FaPaintBrush} from 'react-icons/fa'
import {BsCheckSquare} from 'react-icons/bs'

const Features = () => {
  return (
    <div className='home-container' id='features'>
        <h1>Features</h1>

        <div className='home-features'>

            <div className='home-feature'> <BiBookBookmark className='features-icon'/><br />
                <h4>Study Mode</h4><br />
                <p>A Study mode with built in <a href="https://en.wikipedia.org/wiki/Pomodoro_Technique" className='pomodoro' target='_blank'>pomodoro</a> timer.</p>{/* eslint-disable-line */}
            
            </div>
            
            <div className='home-feature'> <FiBell className='features-icon '/><br />
                <h4>Smart Notifications</h4><br />
                <p>Reminders are sent at times of day when you are most focused.</p>
            </div>

            <div className='home-feature'> <BiListOl className='features-icon '/>
                <h4>Priority System</h4><br />
                <p>A Priority system allowing you to focus on what is most important.</p>
            </div>

            <div className='home-feature'> <GoGraph className='features-icon '/>
                <h4>Completion Graph</h4><br />
                <p>A Daily completion graph allowing you to see your progress at a glance.</p>
            </div>

            <div className='home-feature'><FaPaintBrush className='features-icon '/>
                <h4>Customizable</h4><br />
                <p>Custom card colors and icons to help you stay organized.</p>
            </div>

            <div className='home-feature'><BsCheckSquare className='features-icon '/>
                <h4>Automatic Storting</h4> <br />
                <p>The To Do card automaticly sorts tasks by priority and due date.</p>
            </div>

           
                {/* <li>-Study mode with built in pomodoro timer.</li>
                <li>-Optional notifications that are sent when you are focused most.</li>
                <li>-Priority system allowing you to focus on what is most important.</li>
                <li>-Daily completion graph allowing you to see how much you need to do at a glance.</li>
                <li>-Custom card colors and icons to help you stay organize.</li>
                <li>-To Do card that automaticly sorts tasks by priority and due date.</li> */}
        </div>
        
    </div>
  )
}

export default Features