import React, { Component } from 'react'

export default class Image extends Component {

  constructor()
{
    super()
    this.state={
      photo : "https://png.pngtree.com/thumb_back/fw800/background/20240209/pngtree-a-cute-little-baby-boy-sleeping-in-the-bed-newborn-pic-image_15625000.jpg"
    }
  }

  handlePhotoChange = ()=>{
      this.setState({photo : "https://thumbs.dreamstime.com/z/happy-baby-18181441.jpg"})
  }


  render() {
    return (
      <div>
        <img src={this.state.photo} alt="" />
        <button onClick={this.handlePhotoChange}>CHANGE ME</button>
      </div>
    )
  }
}