import React,{useRef} from "react";

   export default function RefFunction()
{

    let h1ref=useRef()

    let  handleChange=()=>
    {
        h1ref.current.style.color="red"
    }

    return(
        <div>
            <h1 ref={h1ref}>hello ref</h1>
            <button onClick={handleChange}>click</button>
        </div>
    )
}