import React from 'react'

const Mail = () => {
  return (
    <div className="flex  w-full px-14  mt-[13%]" > 
      <div className="flex flex-col ml-1">
        <h1 className="w-[549px] h-[33px] font-[700] text-[29px]  text-[#FBDDBB] ">Get notified when we update!</h1>

        <p className="w-[520px] h-[66px] mt-7 font-[400] text-[18px] text-white ">Get notified when we add new items to our specials menu, update our price list of have promos!</p>
      </div>

      <div>
        <form className="flex items-center mt-[12%] mr-1">
            <input type="email" className="w-[240px] p-3 h-[51px] rounded-[5px] border-[1px] placeholder:text-[14px] " placeholder='emailexample@gmail.com' />
            <button className="w-[170px] h-[51px] bg-[#FBDDBB] ml-2 rounded-[5px] font-[500] text-[18px] text-center text-[#00302E] ">Get Notified</button>
        </form>
      </div>

    </div>
  )
}

export default Mail
