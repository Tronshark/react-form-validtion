import React, { Component } from 'react'
import './popup.css'
class popUp extends Component {
  render (props) {
    return props.trigger ? (
      <div className='popupmain'>
        <div className='popup-inner'>
          <h1>hello world</h1>
          <button className='close-btn'>close</button>
        </div>
      </div>
    ) : (
      ''
    )
  }
}
export default popUp
