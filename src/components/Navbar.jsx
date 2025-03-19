import { useState } from "react";
import logo from '../assets/Group 12.png'
import { Link } from 'react-router'
import { IoMenu } from "react-icons/io5";

function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    return(
        <nav className="w-full flex justify-between items-center sm:px-16 px-4 pt-10 relative">
            <div className="flex items-center justify-between">
                <img src={logo} className="lg:w-14 lg:h-16 sm:w-14 sm:h-16 w-11 h-14 mr-3" alt="" />
                <p className="font-bold lg:text-4xl sm:text-3xl text-2xl text-white">Lilies</p>
            </div>
        
            <ul className="hidden lg:flex sm:flex items-center w-1/3 justify-end space-x-9 ">
                <li>
                    <a href="/" className="text-[#FBDDBB] font-medium text-sm ">Home</a>
                </li>
                <li>
                    <Link to="/login" className="">
                        <button className="bg-[#00302E] font-medium text-sm text-white active:scale-95">Login</button> 
                    </Link>
                </li>
                <li>
                    <Link to="/register" className="">
                        <button className="bg-[#E2B887] sm:px-6 py-3 rounded-md text-sm font-medium text-[#00302E] whitespace-nowrap active:bg-[#E2B887] active:scale-95 transition">Sign Up</button>
                    </Link>
                </li>
            </ul>


            {/* Mobile Menu Button */}
            <button
                className="sm:hidden block text-white text-2xl items-center"
                onClick={() => setIsOpen(!isOpen)}
            >
                <IoMenu/>
            </button>

            {isOpen && (
                <ul className="absolute top-10 right-0 h-screen bg-white shadow-md p-4 rounded-md sm:hidden ">
                    <li className="mb-4 ml-5 items-center justify-center">
                        <a href="/" className="text-gray-800 text-base font-medium">Home</a>
                    </li>
                    <li className="mb-4">
                        <Link to="/login">
                            <button className="bg-[#00302E] text-white px-4 py-2 rounded-md w-full text-base font-medium">
                                Login
                            </button>
                        </Link>
                    </li>
                    <li>
                        <Link to="/register">
                            <button className="bg-[#FBDDBB] text-[#00302E] px-4 py-2 rounded-md w-full text-base font-medium">
                                Sign Up
                            </button>
                        </Link>
                    </li>
                </ul>
            )}

        </nav>
    )
}

export default Navbar