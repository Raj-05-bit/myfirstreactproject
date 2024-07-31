import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'


const Signup = () => {

  let navigate=useNavigate();

  let [username,setUsername]=useState("")
  let [phone,setPhone]=useState("")
  let [password,setPassword]=useState("")



  const handlesubmit=(event)=>{
  event.preventDfault();
  localStorage.setItem("user",username);
  localStorage.setItem("phone",phone);
  localStorage.setItem("pass",password);

  navigate("/")

  // window.location.assign("/")
  }



  return (
    <div>
      <form action="" onSubmit={handlesubmit}>
        <fieldset>
          <legend>signup</legend>

            <label htmlFor="">UserName</label>
            <input type="text" name={"username"} onChange={(e)=>{
              setUsername(e.target.value)
            }} /><br></br>

            <label htmlFor="">Phone</label>
            <input type="number" name={"phone"} onChange={(e)=>{
              setPhone(e.target.value)
            }} /><br></br>

            <label htmlFor="">Password</label>
            <input type="text"  name={"password"} onChange={(e)=>{
              setPassword(e.target.value)
            }}/><br></br>

            <button>Submit</button>

{/* typing in url of signup same time it will load in local host */}
            <h1>{username}</h1>
         
        </fieldset>
      </form>
    </div>
  )
}

export default Signup;
