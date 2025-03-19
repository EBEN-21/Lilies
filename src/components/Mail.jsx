import React from 'react'

const Mail = () => {
  return (
    <div className="px-4 sm:px-16 mt-24 block sm:flex md:flex-wrap lg:flex-nowrap items-center justify-center sm:justify-between " > 
      <div className=" ">
        <h1 className="font-bold text-base sm:text-lg md:text-xl lg:text-2xl text-[#FBDDBB] ">Get notified when we update!</h1>

        <p className="mt-4 font-normal text-sm sm:text-sm text-white sm:w-[65%] ">Get notified when we add new items to our specials menu, update our price list of have promos!</p>
      </div>

      <div className='mt-4 sm:mr-1 xl:mr-12'>
        <form className="sm:justify-between sm:flex sm:space-x-2">
            <input type="email" className="sm:w-[279px] sm:h-[51px] sm:p-0 p-1 pl-3 rounded-md placeholder:text-sm " placeholder='emailexample@gmail.com' />

            <button className="sm:w-[162px] sm:h-[51px] p-2 sm:p-0 mt-3 sm:mt-0 bg-[#FBDDBB] rounded-md font-medium text-sm text-[#00302E] active:scale-95 ">Get Notified</button>
        </form>
      </div>

    </div>
  )
}

export default Mail
