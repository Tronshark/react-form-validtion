import React, { useState } from 'react'

import './App.css'
import Form from './Form.js'

function App () {
  const [popup, setPopup] = useState(false)
  const handleClickOpen = () => {
    setPopup(!popup)
  }
  const closeIcon = () => {
    setPopup(false)
  }
  return (
    <div className='App'>
      <main>
        <div className='App-header'>
          <h2>Test Project </h2>
          <button className='Signupbutton' onClick={handleClickOpen}>
            Sign up
          </button>
          {/* newsletter*/}

          <form className='newsletter'>
            <h1>Newsletter</h1>
            <label className='eaddress'>Email address</label>
            <input
              type='email'
              required
              className='form-control'
              name='email'
              placeholder='Email'
            />
            <button type='submit' className='Signinbutton'>
              Submit
            </button>
          </form>

          {/*popup*/}
          <div>
            {popup ? (
              <div className='notificationPopup'>
                <div className='notificationHeader'>
                  <Form />
                  <div className='closeIcondiv'>
                    <button className='closeIcon' onClick={closeIcon}>
                      X
                    </button>
                  </div>
                </div>
              </div>
            ) : (
              ''
            )}
          </div>
        </div>
      </main>
      <footer className='footer'>
        copyrights@{' '}
        <a href='https://tronshark.github.io/Portfolio/ '>tronshark</a>
      </footer>
    </div>
  )
}

export default App
