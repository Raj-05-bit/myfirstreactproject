import React,{Component} from "react";
import CompB from "./CompB.jsx"
export default class CompA extends Component
{
    constructor()
    {
        super()
        this.state={
            name:"childu"
        }
    }
render()
{
  
    return(
        <div style={{background:"orange"}}>
           
            <h1>A</h1>
            <CompB data={this.state.name}/>
        </div>
    )
}
}