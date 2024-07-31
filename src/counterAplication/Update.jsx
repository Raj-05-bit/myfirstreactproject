
import React, { Component } from 'react'

export default class APP extends Component {

  constructor()
  {
    super()
    this.state={
      username : "shanthi"
    }
  }

  handleChange= ()=>{
    this.setState({username : "kranthi"})
  }

  render() {
    return (
      <div>
        <h1>{this.state.username}</h1>
        <button onClick={this.handleChange}>Change</button>
      </div>
    )
  }
}
