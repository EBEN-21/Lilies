import React from 'react'



/* Tutorial for reusable components */
const Menu = ({imgUrl, title, description}) => {
  return (
    <div className="flex flex-col items-center text-center mt-[3%]">
      <img src={imgUrl}  className="w-[230px] items-center" alt="" />

      <h1 className="w-[177px] h-[33px] font-[700] text-[25px] text-[#FBDDBB] text-center mt-3 ">{title}</h1>

      <p className="w-[263px] h-[66px] mt-3 text-center font-[400] text-[16px] text-white">{description}</p>
    </div>
  )
}

export default Menu
