import React,{Component} from "react";
import userdata from "./card.json";
import "./card.css"
 class Card extends Component
{

    constructor(){
        super()
        this.state={
            userdetails:userdata
        }
    }

    render()
    {
        return(
            <div>
            <nav>welcom to the card formate</nav>
            <div className="holder">
                
            {this.state.userdetails.map((x)=>{
                return(
                    <div className="card">
                        <center>
                    <h1>Name : {x.login}</h1>
                    <h2>id : {x.id}</h2>
                    <img src={x.avatar_url} style={{height:"200px",width:"200px"}} alt="" />
                   
                    </center>
                    </div>
                    
                )
            })}
                
            </div>
            </div>
        )
    }
}

export default Card;