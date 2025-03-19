import React from 'react'
import gplay from '../assets/Google Play Badge.png'
import appstore from '../assets/App Store Badge.png'
import insta from '../assets/Path.png'
import twit from '../assets/Social Icons (1).png'
import youtube from '../assets/Social Icons.png'

const Footer = () => {
  return (
    <div className="lg:flex lg:flex-wrap  lg:items-center lg:justify-between w-full h-auto mt-[8%] text-white bg-black lg:pl-20 lg:pt-14 sm:px-14 sm:pt-14 md:px-7  ">

      <div className="lg:w-[20%] sm:w-1/2 ">
        <h4 className="w-[255px] h-28px font-[500] text-[17px] ">Company</h4>

        <ul className="w-[255px] h-[96px] mt-[39px] sm:mt-6 ">
            <li className="w-full h-[24px] font-[400] text-[14px] "><a href="">About Us</a></li>
            <li className="w-full h-[24px] font-[400] mt-[17px] text-[14px]"><a href="">Careers</a></li>
            <li className="w-full h-[24px] font-[400] mt-[17px] text-[14px]"><a href="">Contact</a></li>
        </ul>
      </div>
    
      <div className="lg:w-[20%] lg:mt-2 sm:w-1/2 sm:mt-10">
        <h4 className="w-[255px] h-28px font-[500] text-[17px] ">Support</h4>

        <ul className="w-[255px] h-[96px] mt-[39px] sm:mt-6 ">
            <li className="w-full h-[24px] font-[400] text-[14px] "><a href="">Help Center</a></li>
            <li className="w-full h-[24px] font-[400] mt-[17px] text-[14px]"><a href="">Safety Center</a></li>
        </ul>
      </div>

      <div className="lg:w-[20%] lg:mt-2 sm:w-1/2 sm:mt-1 ">
        <h4 className="w-[255px] h-28px font-[500] text-[17px] ">Legal</h4>

        <ul className="w-[255px] h-[96px] mt-[39px] sm:mt-6 ">
            <li className="w-full h-[24px] font-[400] text-[14px]  "><a href="">Cookies Policy</a></li>
            <li className="w-full h-[24px] font-[400] mt-[16px] text-[14px]"><a href="">Privacy Policy</a></li>

            <li className="w-full font-[400] mt-[17px] text-[14px]">
              <a href="">Terms Of Service</a>
            </li>

            <li className="w-full font-[400] mt-[17px] text-[14px]">
              <a href="">Dispute Resolution</a>
            </li>
        </ul>
      </div>

      <div className="lg:w-[20%] lg:mt-2 sm:w-1/2 sm:mt-[76px] ">
        <h4 className="w-[255px] h-28px font-[500] text-[17px] ">Install App</h4>

        <ul className="w-[255px] h-[96px] mt-[42px] sm:mt-6 ">
            <li>
              <a href="">
              <img src={gplay} className="w-[122px] mb-6 " alt="" />
              </a>
            </li>
            <li> 
              <a href=""><img src={appstore} className="w-[122px]" alt="" /></a>
              
            </li>
        </ul>
      </div>

      <div className="w-full mt-24 flex flex-col " >
        <hr class="w-full border-t border-gray-700  " /> 

        <div className="flex justify-between w-full items-center mt-6 mb-3 ">
          <p className="w-1/2 font-[400] text-[14px] ">© 2021 LILIES, All rights reserved</p>

          <div className=" w-1/2 flex items-center justify-end mr-7">
            <img src={insta} className="w-[26px] " alt="" />
            <img src={twit} className="w-[31px] ml-4 " alt="" />
            <img src={youtube} className="w-[32px] ml-4 " alt="" />
          </div>

        </div>
        
      </div>
      
        
      
    </div>
  )
}

export default Footer
