import React from 'react';
import { MdAutoDelete } from 'react-icons/md';
import { useDispatch } from 'react-redux';
import { deleteitem, incrementcart } from '../../Redux/Product/action';

const Cartitem = ({cart}) => {
    const {id,Name,Category,Img,Price,Quantity}=cart
    const dispach=useDispatch()
    return (
        <div className="cartCard">
        <div className="flex items-center col-span-6 space-x-6">
          {/* <!-- cart image --> */}
          <img className="lws-cartImage" src={Img} alt="product" />
          {/* <!-- cart item info --> */}
          <div className="space-y-2">
            <h4 className="lws-cartName">{Name}</h4>
            <p className="lws-cartCategory">{Category}</p>
            <p>BDT <span className="lws-cartPrice">{Price}</span></p>
          </div>
        </div>
        <div className="flex items-center justify-center col-span-4 mt-4 space-x-8 md:mt-0">
          {/* <!-- amount buttons --> */}
          <div className="flex items-center space-x-4">
            <button className="lws-incrementQuantity text-[30px]"
            onClick={()=>dispach(incrementcart(id))}
            >
             +
            </button>
            <span className="lws-cartQuantity">{Quantity}</span>
            <button className="lws-decrementQuantity text-[30px]">
             -
            </button>
          </div>
          {/* <!-- price --> */}
          <p className="text-lg font-bold">BDT <span className="lws-calculatedPrice">2200</span></p>
        </div>
        {/* <!-- delete button --> */}
        <div className="flex items-center justify-center col-span-2 mt-4 md:justify-end md:mt-0">
          <button className="lws-removeFromCart"
          onClick={()=>dispach(deleteitem(id))}
          >
            <MdAutoDelete size={30}/>
          </button>
        </div>
      </div>
    );
};

export default Cartitem;