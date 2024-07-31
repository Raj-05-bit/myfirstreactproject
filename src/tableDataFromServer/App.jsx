import React,{Component} from "react";
import Employee from "./Employee.jsx";

// import userData from "data.json"
class App extends Component
{


// constroctor()
// {

//     super()
//     this.state={
//         empdetails:userData
//     }

// }

render()
{
    return(

        <div>
            {/* <Employee data={this.state.userData}/> */}
            <Employee/>
     
        </div>

    )
}

}
export default App;