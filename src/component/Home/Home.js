import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addtocart } from '../../Redux/Product/action';
import Card from './Card';
import From from './From';

const Home = () => {
    const dispach=useDispatch()
    const productall=useSelector(state=>state.product)
    const handlecart=(addcart)=>[
       dispach(addtocart(addcart))
    ]
    return (
        <main className="py-16">
        <div className="productWrapper">
          {/* <!-- products container --> */}
          <div className="productContainer" id="lws-productContainer">
            {/* <!-- product item --> */}
            {productall.map(product=><Card key={product.id} handlecart={()=>handlecart(product)} product={product} ></Card>)}
            {productall.length === 0 && <span>No Your Product</span>}
          </div>
          <div>


            {/* <!-- Product Input Form --> */}
             <From></From>
            {/* <!-- Product Input Form Ends --> */}
          </div>
        </div>
      </main>
    );
};

export default Home;