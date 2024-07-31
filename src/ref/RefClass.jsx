import React,{Component,createRef} from "react";

export default class RefClass
{


    render()
    {
        constructor()
        {
            super()
            let h1ref=createRef()
        }
       
        let handleChange=()=>{
            this.h1ref.currnt.style.color="yellow"
        }
        return(
            <div>
                <h1>welcom to Ref</h1>
                <button onClick={handleChange}>submit</button>
            </div>
        )
    }
}