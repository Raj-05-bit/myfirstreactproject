import React,{useState} from "react";

function OnOf()
{

let [bulb,setSwitch]=useState(true)


let button=()=>{
    if(!bulb)
    {
        setSwitch(true)
    }
    else{
        setSwitch(false)
    }
}

    return(
        <div>
            <button onClick={button}>{bulb ? "on": "off"}</button>
         
        </div>
    )
}
export default OnOf;