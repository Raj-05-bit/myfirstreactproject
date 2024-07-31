import React,{useState} from "react";

export default function Name()
{

    let [user,setUser]=useState("Raju")

    let changeName=()=>{
        setUser("raj")
    }
    return(
        <div>
            <h1 onClick={changeName}>{user}</h1>
        </div>
    )
}