import React from 'react';
import { useSelector } from 'react-redux';
import Cartitem from './Cartitem';

const Cart = () => {
    const cartall=useSelector(state=>state.cart)
    console.log(cartall.length)
    return (
        <main className="py-16">
        <div className="container 2xl:px-8 px-2 mx-auto">
          <h2 className="mb-8 text-xl font-bold">Shopping Cart</h2>
          <div className="cartListContainer">
            <div className="space-y-6">
              {/* <!-- Cart Item --> */}
              {cartall.map(item=><Cartitem key={item.id} cart={item}></Cartitem>)}
                
              {/* <!-- Cart Items Ends --> */}
    
            </div>
    
            {/* <!-- Bill Details --> */}
            <div>
              <div className="billDetailsCard">
                <h4 className="mt-2 mb-8 text-xl font-bold text-center">Bill Details</h4>
                <div className="space-y-4">
                  {/* <!-- sub total --> */}
                  <div className="flex items-center justify-between">
                    <p>Sub Total</p>
                    <p>BDT <span className="lws-subtotal">8800</span></p>
                  </div>
                  {/* <!-- Discount --> */}
                  <div className="flex items-center justify-between">
                    <p>Discount</p>
                    <p>BDT <span className="lws-discount">0</span></p>
                  </div>
                  {/* <!-- VAT --> */}
                  <div className="flex items-center justify-between">
                    <p>VAT</p>
                    <p>BDT <span className="vat">0</span></p>
                  </div>
                  {/* <!-- Total --> */}
                  <div className="flex items-center justify-between pb-4">
                    <p className="font-bold">TOTAL</p>
                    <p className="font-bold">BDT <span className="lws-total">8800</span></p>
                  </div>
                  <button className="placeOrderbtn">place order</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    );
};

export default Cart;