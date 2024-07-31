import React, { useState } from "react";
import Billing from "./Billing.jsx"
import "./globle.css"
const Product=()=>{

    let [product,setProdect]=useState({
        pimg:"data:image/jpeg;base64,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",
        pname:"Apple",
        pdesc:"Brand",
        pprice:70000
    })

    let [pqnt,setPqnt]=useState(1)

    let incriment=()=>{
        
        setPqnt(pqnt=pqnt+1)
        
    }
    let decriment=()=>{
        if(pqnt>1){
        setPqnt(pqnt=pqnt-1)
        }
    }

    return(
        <div>
            <center>
            <div className="container">
            <div className="product">
                <img src={product.pimg} alt="" />
                <h2>Product Name : {product.pname}</h2>
                <h2>Product Description : {product.pdesc}</h2>
                <h2>Product price : {product.pprice}</h2>
                <button onClick={decriment}>-</button><h1>{pqnt}</h1><button onClick={incriment}>+</button>
            </div>
            <div className="billing">
            <Billing data={product} qnt={pqnt}/>

            </div>
            </div>
            </center>
        </div>
    )
}
export default Product;