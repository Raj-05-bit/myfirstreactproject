import React,{Component} from "react";

class Emp extends Component
{

constructor()
{
    super()
    this.state={
        userName:"raju",
        password:12345,
        skills:["html","css","js","java"]
    }
}

render()
{
    return(
        <div>
        <div>{this.state.userName}</div>
        <div>{this.state.password}</div>
        <ol>
        <div>{this.state.skills.map((x)=>{
            return(
                <li>{x}</li>
            )
        })}</div>
        </ol>
        </div>
    )
}

}
export default Emp;