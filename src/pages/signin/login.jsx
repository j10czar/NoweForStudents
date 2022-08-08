import React from 'react'

const login = () => {
  return (
    <div className='signin-modal'>
        <h1 className='signup-title'>Log In</h1>
        <div className='signup-userpass'>
            <form action="">
                <label htmlFor="username">Email</label>
                <br />
                <input type="email" name='email' id='email' className='text-field signup-text-field' required/>
                <br />
  
                <label htmlFor="password">Password</label>
                <br />
                <input type="password" name='password' id='password' className='text-field signup-text-field' required/>


            </form>
        </div>

        <div className='signup-btn-container'>
            <button type='submit' className='main-btn createacc-btn'>Log In</button>

            <a href='/' className='alt-btn createacc-btn'>Cancel</a>
        </div>


        {/* <p>Forgot your password? <a href="/" className='link login-link'>Reset Password</a></p> */}

        <p>Don't have an account? <a href="/signup" className='link login-link'>Create Account</a></p>
        

        
    </div>
  )
}

export default login