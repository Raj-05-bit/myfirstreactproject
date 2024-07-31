import React,{Component} from "react";
import userData from "./data.json"
class Employee extends Component
{

constructor()
{

    super()
    this.state={
        empdetails:userData
    }

}

render()
{
    return(

        <div>
            <center>
       <table border="" cellPadding={"20px"} cellSpacing={"20px"}>
        <tr>
            <th>Login</th>
            <th>id</th>
            <th>type</th>
            <th>image</th>
        </tr>
        {this.state.empdetails.map((x)=>{
            return(
                <tr>
                    <td>{x.login}</td>
                    <td>{x.id}</td>
                    <td>{x.type}</td>
                   <img src={x.avatar_url} style={{height:"200px",width:"200px"}} alt="" />
                </tr>
            )
        })}
       </table>
       </center>
        </div>

    )
}

}
export default Employee;