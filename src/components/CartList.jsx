import React from 'react'

const CartList = ({image,title,qty,unitPrice,subTotal, handleRemoveFromCart, id}) => {
  return (
      <div className="w-[100%] flex items-center px-1 justify-between mt-7">
        <div className="w-[50%] flex items-center"> 
          <img src={image} className='w-[70px] h-[70px] ' alt="" />
          <div className="ml-2">
            <h1 className='w-[113px] font-[600] text-[17px] text-[#00302E] '>{title}</h1>
            <button className='w-[50px] h-[21px] font-[500] text-[12px] text-[#C92C33] ' onClick={()=>handleRemoveFromCart(id)}>Remove</button>
          </div> 
        </div>
        <div className="w-[50%] flex items-center  justify-between mb-5">
            <p className=' font-[700] text-[17px] text-[#00302E]'>{qty}</p>
            <p className=' font-[700] text-[17px] text-[#00302E]'>₦{unitPrice}</p>
            <p className=' font-[700] text-[17px] mr-5 text-[#00302E]'>₦{subTotal}</p>
        </div>
      </div>

  )
}

export default CartList
