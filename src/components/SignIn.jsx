import { useState } from 'react'
import React from 'react'
import loginpic from '../assets/Group 13.png'
import { Link } from 'react-router'
import { toast } from 'react-toastify'
import { useNavigate } from 'react-router'
import { FaEye, FaEyeSlash } from "react-icons/fa";


const SignIn = () => {

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const [showPassword, setShowPassword] = useState(false);
  
    const togglePasswordVisibility = () => {
      setShowPassword(!showPassword);
    };

  const navigate = useNavigate();

  const userInfo = JSON.parse(localStorage.getItem("userInfo"))
  
  const handleLogin = (e) => {
    e.preventDefault()

    if (userInfo === null) {
      toast.error('User does not exist', {autoClose: 1000})
      return;
    }

    if (userInfo.email !== email  || userInfo.password !== password) {
      toast.error('Invalid email or password')
      return;
    } else {      
      toast.success('Login successfully', {autoClose: 1000})
      
      setTimeout(() => {
        navigate('/dashboard');
      }, 2000);
    }
}

  return (
    <div className="h-screen lg:flex">

        <div className='hidden lg:block lg:w-[50%]'>
            <img src={loginpic} className="lg:w-[740px] lg:h-screen " alt="" />
        </div> 

     <div className="w-full mt-[20%] sm:mt-0 lg:w-[50%] p-7 items-center justify-center ">
        <div className="text-center mt-[20%]  ">
          <h3 className="font-semibold text-lg sm:text-2xl text-[#00302E]  ">Welcome Back!</h3>
        </div>
        
        <form className="flex flex-col items-center mt-10">
            <input type="email" id='email' value={email} onChange={(e) => setEmail(e.target.value)}  
            className="w-[80%] h-[71px] p-3 border-2 rounded-md border-[#FBDDBB82] placeholder:text-sm focus:border-[#42b9b5] outline-none " placeholder='Your Email Address' />

            <div className='relative w-[80%] mt-10'>
                <input type={showPassword ? "text" : "password"} id='password' value={password} onChange={(e) => setPassword  (e.target.value)} required className=" w-full h-[71px] p-3 border-2 rounded-md border-[#FBDDBB82] placeholder:text-sm focus:border-[#42b9b5] outline-none " placeholder='Your Password' />
            
                <span onClick={togglePasswordVisibility} className="absolute right-3 top-7 cursor-pointer">
                  {showPassword ? <FaEyeSlash /> : <FaEye />}
                </span>
            </div>

            <button onClick={handleLogin} className="mt-6 w-[80%] h-[60px] p-3 rounded-md bg-[#00302E] text-[#FBDDBB] font-medium text-sm  active:bg-[#08251e] active:scale-95 transition ">LOGIN</button>
        </form>

        <div className="text-xs ml-7 md:ml-14 lg:ml-10 xl:ml-[67px] mt-3 w-[80%] flex justify-between ">
       
        <Link to= "/register" className="sm:text-sm font-normal text-[#00302EE8] hover:underline active:text-orange-300 ">
                <p>Create an account</p>
        </Link>
        
        
        <a href="" className="sm:text-sm font-normal text-[#00302EE8] hover:underline active:text-orange-300">
            <p>Forgot Password</p>
        </a>
     </div>
     </div>

     
    </div>
  )
}

export default SignIn
