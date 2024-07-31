import React, { createContext } from "react";

export let ContextApi=createContext()

let Theme=
{
    Dark:
    {
        background:"blue"
    },
    Light:{
        background:"red"
    }
}

const UserProvider=(children)=>
{
return <ContextApi.Provider value={Theme}>
    {children}
</ContextApi.Provider>
}

export default UserProvider;