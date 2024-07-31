import React from "react";

 const Billing=(props)=>{
    
    let {pname,pdesc,pprice}=props.data
    return(
        <div>
                <h2>Product Name : {pname}</h2>
                <h2>Product Description : {pdesc}</h2>
                <h2>Product price : {pprice*(props.qnt)}</h2> 
                <h2>Product qnt : {props.qnt}</h2>          
        </div>
    )
}
export default Billing;