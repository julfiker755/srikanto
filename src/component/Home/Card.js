import React from 'react';

const Card = ({product,handlecart}) => {
    const {id,Name,Category,Img,Price,Quantity}=product
    return (
        <div className="lws-productCard">
              <img className="lws-productImage" src={Img} alt="product" />
              <div className="p-4 space-y-2">
                <h4 className="lws-productName">{Name}</h4>
                <p className="lws-productCategory">{Category}</p>
                <div className="flex items-center justify-between pb-2">
                  <p className="productPrice">BDT <span className="lws-price">{Price}</span></p>
                  <p className="productQuantity">QTY <span className="lws-quantity">{Quantity}</span></p>
                </div>
                <button onClick={handlecart} className="lws-btnAddToCart">Add To Cart</button>
              </div>
            </div>
    );
};

export default Card;