import React from 'react'
import gplay from '../assets/Google Play Badge.png'
import appstore from '../assets/App Store Badge.png'
import insta from '../assets/Path.png'
import twit from '../assets/Social Icons (1).png'
import youtube from '../assets/Social Icons.png'

const Footer = () => {
  return (
    <div className="flex flex-wrap justify-between w-full h-[500px] mt-[11%] px-[7%]  text-white pt-[9%] bg-black ">
      <div className="w-[20%] h-[148px] ml-[3%] ">
        <h4 className="w-[255px] h-28px font-[500] text-[18px] ">Company</h4>

        <ul className="w-[255px] h-[96px] mt-[39px] ">
            <li className="w-full h-[24px] font-[400] text-[16px] "><a href="">About Us</a></li>
            <li className="w-full h-[24px] font-[400] mt-[17px] text-[16px]"><a href="">Careers</a></li>
            <li className="w-full h-[24px] font-[400] mt-[17px] text-[16px]"><a href="">Contact</a></li>
        </ul>
      </div>
    
      <div className="w-[20%] h-[148px]  mr-[1%] ">
        <h4 className="w-[255px] h-28px font-[500] text-[18px] ">Support</h4>

        <ul className="w-[255px] h-[96px] mt-[39px] ">
            <li className="w-full h-[24px] font-[400] text-[16px] "><a href="">Help Center</a></li>
            <li className="w-full h-[24px] font-[400] mt-[17px] text-[16px]"><a href="">Safety Center</a></li>
        </ul>
      </div>

      <div className="w-[20%] h-[148px] ml-[1%] ">
        <h4 className="w-[255px] h-28px font-[500] text-[18px] ">Legal</h4>

        <ul className="w-[255px] h-[96px] mt-[39px] ">
            <li className="w-full h-[24px] font-[400] text-[16px]  "><a href="">Cookies Policy</a></li>
            <li className="w-full h-[24px] font-[400] mt-[16px] text-[16px]"><a href="">Privacy Policy</a></li>

            <li className="w-full font-[400] mt-[17px] text-[16px]">
              <a href="">Terms Of Service</a>
            </li>

            <li className="w-full font-[400] mt-[17px] text-[16px]">
              <a href="">Dispute Resolution</a>
            </li>
        </ul>
      </div>

      <div className="w-[20%] h-[148px] ml-[1%] ">
        <h4 className="w-[255px] h-28px font-[500] text-[19px] ">Install App</h4>

        <ul className="w-[255px] h-[96px] mt-[42px] ">
            <li>
              <a href="">
              <img src={gplay} className="w-[122px] mb-4 " alt="" />
              </a>
            </li>
            <li> 
              <a href=""><img src={appstore} className="w-[122px]" alt="" /></a>
              
            </li>
        </ul>
      </div>

      <div className="w-full  " >
        <hr class="w-full border-t border-gray-700 mt-[17%] " /> 

        <div className="flex justify-between w-full items-center mt-[3%] mb-3 ">
          <p className="w-[540px] h-[24px] ml-[2%] font-[400] text-[15px] ">© 2021 LILIES, All rights reserved</p>

          <div className="flex items-end mr-[1%] ">
            <img src={insta} className="w-[30px] " alt="" />
            <img src={twit} className="w-[30px] ml-5 " alt="" />
            <img src={youtube} className="w-[30px] ml-5 " alt="" />
          </div>

        </div>
        
      </div>
      
        
      
    </div>
  )
}

export default Footer
