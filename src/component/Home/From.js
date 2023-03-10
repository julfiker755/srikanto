import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addproduct } from '../../Redux/Product/action';

const From = () => {
    const [name,setname]=useState('')
    const [category,setcategory]=useState('')
    const [img,setimg]=useState('')
    const [price,setprice]=useState(null)
    const [quantity,setquantity]=useState(null)
    const dispach=useDispatch()
    const handlefrom=(e)=>{
        e.preventDefault()
        const data={
            id:Math.floor(Math.random()*666666),
            Name:name,
            Category:category,
            Img:img,
            Price:price,
            Quantity:quantity

        }
        dispach(addproduct(data))

    }
    return (
        <div className="formContainer">
              <h4 className="formTitle">Add New Product</h4>
              <form onSubmit={handlefrom} className="space-y-4 text-[#534F4F]" id="lws-addProductForm">
                {/* <!-- product name --> */}
                <div className="space-y-2">
                  <label for="lws-inputName">Product Name</label>
                  <input onChange={(e)=>setname(e.target.value)} className="addProductInput" id="lws-inputName" type="text" required />
                </div>
                {/* <!-- product category --> */}
                <div className="space-y-2">
                  <label for="lws-inputCategory">Category</label>
                  <input onChange={(e)=>setcategory(e.target.value)} className="addProductInput" id="lws-inputCategory" type="text" required />
                </div>
                {/* <!-- product image url --> */}
                <div className="space-y-2">
                  <label for="lws-inputImage">Image Url</label>
                  <input onChange={(e)=>setimg(e.target.value)} className="addProductInput" id="lws-inputImage" type="text" required />
                </div>
                {/* <!-- price & quantity container --> */}
                <div className="grid grid-cols-2 gap-8 pb-4">
                  {/* <!-- price --> */}
                  <div className="space-y-2">
                    <label for="ws-inputPrice">Price</label>
                    <input onChange={e=>setprice(parseFloat(e.target.value))} className="addProductInput" type="number" id="lws-inputPrice" required />
                  </div>
                  {/* <!-- quantity --> */}
                  <div className="space-y-2">
                    <label for="lws-inputQuantity">Quantity</label>
                    <input onChange={e=>setquantity(parseFloat(e.target.value))} className="addProductInput" type="number" id="lws-inputQuantity" required />
                  </div>
                </div>
                {/* <!-- submit button --> */}
                <button type="submit" id="lws-inputSubmit" className="submit">Add Product</button>
              </form>
            </div>
    );
};

export default From;