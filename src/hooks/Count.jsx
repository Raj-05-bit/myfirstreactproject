import React,{useState} from "react";

function Count()
{
    let [count,setCount]=useState(0)

    let incriment=()=>
    {
        setCount(count+1)
    }
    let dicriment=()=>{
        setCount(count-1)
    }
    let reset=()=>{
        setCount(0)
    }
    return(
        <div>
            <div>{count}</div>
            <button onClick={incriment}>+</button>
            <button onClick={dicriment}>-</button>
            <button onClick={reset}>reset</button>
        </div>
    )
}
export default Count;