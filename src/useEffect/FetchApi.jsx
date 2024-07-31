import React, { useEffect, useState } from 'react'

const FetchApi = () => {


let [userData,setUser]=useState([])
    useEffect(()=>{

            window.fetch("https://api.github.com/users")
            .then((x)=>x.json())
            .then((y)=>setUser(y))
            .catch((err)=>console.log(err))
        
;
    },[userData])


  return (
    <div>
      {userData.map((x)=>{
        return(
            <h1>{x.login}</h1>
        )
      })}
    </div>
  )
}

export default FetchApi
