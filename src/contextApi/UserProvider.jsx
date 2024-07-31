import React, { createContext } from "react";

export let ContextApi=createContext()

let {Provider}=ContextApi

const UserProvider=(children)=>{
    
return <provider value={JSON}>
    {children}
</provider>
}

export default UserProvider;