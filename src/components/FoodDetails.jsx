import React from 'react'
import Counter from './Counter'

const FoodDetails = ({
  image,
  title,
  description,
  price,
  readiness,
  stock,
  count,
  handleIncrement,
  handleDecrement,
  id,
  handleAddToCart,
}) => {

  
  return (
    <div className=" w-[100%] p-9 ">
      <div className="flex flex-col justify-center items-center">
        <img src={image} alt="" className="w-[230px] " />
        <h2 className="w-[268px] h-[33px] text-center text-[#00302E] text-[17px] font-[600] mt-5 mb-2">{title}</h2>
        <p className="w-[394px] text-center mb-2 text-[11px] font-[400] text-[#000000B0]">
          {description}
        </p>
      </div>

      <div className="flex justify-between items-center mt-5 text-[#00302E] text-center text-[17px] m font-[600]">
        <h2 className='w-[112px] '>₦{price}</h2>
        <h2 className='w-[95px]'>{readiness}</h2>
        <h2>{stock} Pcs Avail</h2>
      </div>

      <div className="flex mb-10 mt-6">
        
        <Counter count={count}
        handleIncrement={()=>handleIncrement(id)}
        handleDecrement={()=>handleDecrement(id)}/>

        <button 
          className={`w-[144px] bg-[#00302E] ml-[107px] text-[#FBFBFB] text-[13px] font-[600]  ${count === 0 ? 'opacity-70 cursor-not-allowed' : ''}`} 
          disabled={count === 0 ? "disabled" : null} 
          onClick={() => handleAddToCart(id)} 
        >
          Add to cart
        </button>
      </div>
    </div>
  );
};

export default FoodDetails