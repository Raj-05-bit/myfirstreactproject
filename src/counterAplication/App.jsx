
import React, { Component } from 'react'

export default class APP extends Component {
  
  constructor()
  {
    super()
    this.state={
      count : 0
    }
  }

  handleIncrement = ()=>{
      this.setState({count : this.state.count+1})
  }

  handleDecrement = ()=>{
      if(this.state.count >=1)
      {
        this.setState({count : this.state.count-1})
      }

  }

  handleReset = ()=>{
    this.setState({count: 0})
  }

  render() {
    return (
      <div>
        <h1>{this.state.count}</h1>
        <button onClick={this.handleIncrement}>+ increment</button>
        <button onClick={this.handleDecrement}>- decrement</button>
        <button onClick={this.handleReset}>Reset</button>
       
      </div>
    )
  }
}