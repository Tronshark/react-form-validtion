import React, { Component } from 'react'

import './App.css'
import Form from './Form.js'
import PopUp from './components/PopUp'
class App extends Component {
  render () {
    return (
      <div className='App'>
        <main>
          <div className='App-header'>
            <h2>Test Project </h2>

            <br />
            <Form />
            <br />
          </div>
        </main>
      </div>
    )
  }
}

export default App
