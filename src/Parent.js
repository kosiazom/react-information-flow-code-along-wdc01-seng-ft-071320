import React, { Component } from 'react'
import { getRandomColor } from './randomColorGenerator.js'
import Child from './Child'

class Parent extends Component {

  constructor() {
    super()
    this.state = {
      color: getRandomColor()
     
    }
  }

  // changeColor = (newChildColor) => {
  //     this.setState({
  //         color: getRandomColor(),
  //         childrenColor: newChildColor
  //     })
  // }

  render() {
    return (
      <div className="parent" style={{backgroundColor: this.state.color}}>
        <Child />
        <Child  />
      </div>
    )
  }
}

export default Parent
