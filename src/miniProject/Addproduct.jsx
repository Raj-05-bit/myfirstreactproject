import React, { useState } from 'react'

const Addproduct = () => {

    let [productData, setProductData]=useState({
        pname:"",
        pprice:"",
        pqnt:"",
        pimg:""
    })
let data=(e)=>{
setProductData({...productData,[e.target.name]:e.target.value})
}

let handlesubmit=(e)=>{
e.preventDefault()
console.log(productData);

}

  return (
    <center>
    <div onSubmit={handlesubmit} className='addproduct'>
      <form action="" ><br />
        <h1>Add Products</h1><br />
        <div>
            <label htmlFor="a">product name : </label>
            <input type="text" name="pname" id="a" placeholder='product name' onChange={data} />
        </div><br />
        <div>
        <label htmlFor="a">product price : </label>
        <input type="number" name="pprice" id="a" placeholder='product price' onChange={data}/>
        </div><br />
        <div>
        <label htmlFor="a">product qnt : </label>
        <input type="number" name="pqnt" id="a" placeholder='product qantity' onChange={data}/>
        </div><br />
        <div>
        <label htmlFor="a">product image : </label>
        <input type="file" name="pimg" id="a" placeholder='product image'onChange={data} />
        </div><br />
        <button>submit</button><button type='reset'>Cancle</button>
      </form>
    </div>
    </center>
  )
}

export default Addproduct
