import React from 'react';

const OrderList = ({ id, image, title, qty, subTotal, ready, handleRemoveOrder }) => {
  return (
    <div className="w-full flex items-center px-2 justify-between mt-6">
      <div className="w-1/2 flex items-center gap-3">
        <img src={image} className="w-[70px] h-[70px]" alt={title} />
        <div>
          <h1 className="font-semibold text-[17px] text-[#00302E]">{title}</h1>
          <button 
            className="text-red-600 text-[12px] font-medium"
            onClick={() => handleRemoveOrder(id)}
          >
            Remove
          </button>
        </div>
      </div>
      <div className="w-1/2 flex  items-center justify-between mb-5">
        <p className="font-bold text-[17px] text-[#00302E]">{qty}</p>
        <p className="font-bold text-[17px] text-[#00302E]">₦{subTotal}</p>
        <p className={`font-bold text-[16px] mr-6 ${ready ? 'text-green-600' : 'text-red-500'}`}>
          {ready ? 'Ready' : 'Pending'}
        </p>
      </div>
    </div>
  );
};

export default OrderList;
