import { useState } from "react";
import logo from '../assets/Group 12.png'
import { Link } from 'react-router'

function Navbar() {

    return(

        
        <nav className="w-full flex justify-between pt-9 px-14 text-white items-center ">
           <div className="flex items-center space-x-4" >
            <img src={logo} className="w-[51px] h-[62px] items-center "  alt="" />

            <p className="w-[92px] h-[46px] text-[32px] font-bold items-center">Lilies</p>
           </div>
        
            <ul className="flex m-3 items-center">
                <li className=""><a  href="" className="text-[#FBDDBB] text-[17px] font-[500] w-[63px] h-[33px] ">Home</a></li>

                
                <Link to= "/login" className="w-[57px] ml-8">
                <button className="  text-[17px] font-[500] bg-[#00302E] ">Login</button> 
                </Link>
                
                
                <Link to= "/register" className="w-[110px] ml-8 ">
                <button className=" bg-[#E2B887] text-[#00302E] font-bold text-center p-2 w-[110px]  rounded-md text-[17px]  ">Sign Up</button>
                </Link>
                
            </ul>
           
        </nav>
    )
}

export default Navbar