import React from "react";
import { Link  } from "react-router-dom";
const Nav=()=>{

return(
<nav>
    <div>
        <Link to={"/"}>Home</Link>
    </div>
    <div>
    <Link to={"/about"}>About</Link>
    </div>
    <div>
    <Link to={"/profile"}>Profile</Link>
    </div>
    <div>
    <Link to={"/signup"}>Signup</Link>
    </div>
</nav>
)
}
export default Nav;
