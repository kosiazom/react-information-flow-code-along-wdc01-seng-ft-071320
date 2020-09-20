import React, { Component } from 'react'
import { getRandomColor } from './randomColorGenerator.js'

class Child extends Component {
  render() {
      console.log(this.props) 
    //   this props is being passed down from the ParentComponent

    return (
      <div 
        className="child"
        style={{backgroundColor: '#FFF' }}
      ></div>
    )
  }
}

export default Child
