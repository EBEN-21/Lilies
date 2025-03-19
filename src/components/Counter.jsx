import React from 'react';
import {useState} from 'react';



const Counter = ({count, handleDecrement, handleIncrement}) => {

  
  return (
    <div className='w-[50%] ml-6'>
      <button
        className={`w-[48px] h-[55px] bg-[#F3C294]
                  text-[#00302E] text-[31px] font-[600] text-center mr-2 
                  ${count === 0 ? 'opacity-50 cursor-not-allowed' : ''}`}
                  disabled={count === 0 ? "disabled" : null}
                  onClick={handleDecrement}
      >
        -
      </button>

      <span className="text-[27px] font-[600] text-[#00302E] text-center ml-2 mr-2 w-[21px]" >{count}</span>
      <button
        className="w-[48px] h-[55px] bg-[#F3C294]
                  text-[#00302E] text-[31px] font-[600] text-center  ml-2 rounded-sm"
                  onClick={handleIncrement}
      >
        +
      </button>
    </div>
  );
}

export default Counter