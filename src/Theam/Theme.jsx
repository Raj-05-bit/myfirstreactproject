import React, { createContext, useContext, useRef, useState } from "react";
import {ContextApi} from "./ContextApi"




const Theme=()=>
{
    let [state,setState]=useState(false)

    let [Dark,Light]=useContext(ContextApi)

    let ChangeRef=useRef();


let handleChange=()=>{
    setState(!state)

if(state==false){
    ChangeRef.current.style.background=Dark.background
}
else{
    ChangeRef.current.style.background=Light.background
}

}

return (
    <div>
        <h1 ref={ChangeRef}>i am the theme changer</h1>
        <button onclick={handleChange}>{state ? "Dark" : "Light"}</button>
    </div>
)
}
export default Theme;