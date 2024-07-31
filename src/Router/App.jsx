import React from "react";
import {BrowserRouter as Router,Routes,Route} from "react-router-dom";
import Home from "./Home";
import About from "./About";
import Profile from "./Profile";
import Nav from "./Nav";
import "./globle.css"
import Signup from "./Signup";
const App=()=>{

return(
<div>
    <Router>
        <Nav/>
        <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/about' element={<About/>}/>
            <Route path='Profile' element={<Profile/>}/>
            <Route path='signup' element={<Signup/>}/>
        </Routes>
    </Router>
</div>
)
}
export default App;
