import React from 'react'



/* Tutorial for reusable components */
const Menu = ({imgUrl, title, description}) => {
  return ( 
    <div className="flex flex-col items-center mt-7">
      <img src={imgUrl}  className="w-[170px] xl:w-[240px] " alt="" />

      <h1 className="lg:w-[177px] h-[33px] font-[700] lg:text-[25px] text-[#FBDDBB] text-center mt-3 sm:w-full sm:text-xl ">{title}</h1>

      <p className="lg:w-[263px] h-[66px] lg:mt-3 text-center font-[400] text-[16px] text-white sm:w-[370px] sm:text-sm sm:mt-2 ">{description}</p>
    </div>
  )
}

export default Menu
