import React from 'react'

const Step1 = () => {
  return (
    <div className='signup-modal'>
        <h1 className='signup-title'>Sign Up</h1>
        <div className='signup-userpass'>
            <form action="">
                <label htmlFor="firstname">First Name</label>
                <br />
                <input type="text" name='firstname' id='firstname' className='text-field signup-text-field'/>
                <br />
                <label htmlFor="lastname">Last Name</label>
                <br />
                <input type="text" name='lastname' id='lastname' className='text-field signup-text-field'/>
                <br />
                <label htmlFor="username">Email</label>
                <br />
                <input type="text" name='email' id='email' className='text-field signup-text-field'/>
                <br />
  
                <label htmlFor="password">Password</label>
                <br />
                <input type="password" name='password' id='password' className='text-field signup-text-field'/>


            </form>
        </div>

        <div className='signup-btn-container'>
            <button type='submit' className='main-btn createacc-btn'>Create Account</button>

            <button type='button' className='alt-btn createacc-btn'>Cancel</button>
        </div>

        <p>Have an account? <a href="" className='link'>Sign in</a></p>
        

        
    </div>
  )
}

export default Step1