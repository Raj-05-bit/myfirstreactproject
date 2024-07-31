import React,{Component} from "react";

export default class CompB extends Component
{


render()
{
    return(
        <div style={{background:"purple"}}>
            <h1>B</h1>
            <h6>{this.props.data}</h6>
        </div>
    )
}

}