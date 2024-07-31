import React,{usestate} from "react";

export default function TextToPassword()
{
    let [user,setUser]=usestate(false)

    let changeType=()=>{
        if(!user)
        {
            setUser(true)
        }
        else{
            setUser(false)
        }
    }

    return(
        <div>
            <input type={user ? "text" : "password"}/>
            <img src={user ? "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSjBLy6CHhHhDG7g9DF6L5BVT0mibNxlIzBQQ&s" : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS1OW7n6Sp0_DS4PGgv0_AHEbTUF3aQZN5NdA&s"} onClick={changeType} alt="" />
        </div>
    )
}