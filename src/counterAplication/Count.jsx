import React,{Component} from "react";
// import "./count.css"

export default class Count extends Component
{

    constructor(){
        super()
        this.state={
            count:0
        }
    }

    incriment=()=>{
        this.setState({count:this.state.count+1})
    }
    dicriment=()=>{
        if(this.state.count)
        this.setState({count:this.state.count-1 })
    }
    reset=()=>{
        this.setState({count:0})
    }

    render(){
        return(
            <div style={{border:"1px solid red"}}>
                <center>
                <div className="counter">
                <button onClick={this.dicriment}>Dicriment</button>
                <div>{this.state.count}</div>
                <button onClick={this.incriment}>Increment </button>
                </div>
                
                <button onClick={this.reset}>Reset</button>
                </center>
            </div>
        )
    }
}