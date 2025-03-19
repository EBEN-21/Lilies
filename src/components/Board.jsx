import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import infopic from '../assets/40w 1.png'
import Fooditems from './Fooditems'



const Board = ({ FoodData, count, handleIncrement, handleDecrement, handleAddToCart,  }) => {
  const [msg, setMsg] = useState('')

  const userInfo = JSON.parse(localStorage.getItem("userInfo"))

  const handleTime = () => {
    const time = new Date().getHours()
    if (time < 12) {
      setMsg('Good Morning')
    } else if (time < 18) {
      setMsg('Good Afternoon')
    } else {
      setMsg('Good Evening')
  }
 }
  useEffect(() => {
    handleTime()
  } , [])


  
  return (
    <div className='ml-56 w-[79%] flex flex-col items-center '>
      
      <div className='w-[79%] ml-16 flex items-center justify-between  mt-[90px]' >

        <div >
            <h1 className='w-[378px] h-[33px] font-[600] text-[21px] text-[#00302E] '>
              {msg}, {userInfo.username}
            </h1>
            <p className='w-[309px] h-[33px] font-[400] text-[14px] '>What delicious meal are you craving today?</p>
        </div>

        <div className='w-20'>
          <img className='w-[50px] h-[50px] ml-[100%] ' src={infopic} alt="Delicious meal" />
        </div>

      </div>

      <div className='w-[83%] ml-[13%] flex flex-wrap items-center justify-between mt-[59px] '>
        {FoodData?.map((food,index) => (
          <Fooditems 
            key={index}
            price={food.price}
            description={food.description}
            image={food.image}
            title={food.title}
            count={food.count}
            stock={food.stock}
            handleDecrement={handleDecrement}
            handleIncrement={handleIncrement}
            id={food.id}
            handleAddToCart={handleAddToCart}
          />
        ))}
      </div>
    </div>
  )
}

export default Board
