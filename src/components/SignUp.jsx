import React from 'react'
import { useState } from 'react'
import { useNavigate } from 'react-router'
import signupic from '../assets/Group 14.png'
import { Link } from 'react-router'
import { toast } from 'react-toastify'
import { FaEye, FaEyeSlash } from "react-icons/fa";

const SignUp = () => {

  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (username==="" || email === "" || password ==="") {
      toast.error('Please fill in all fields')
      return;
    } else {
      const userData = {username, email, password}

    localStorage.setItem("userInfo", JSON.stringify(userData))
    toast.success('Account created successfully', {autoClose: 1000})

    setTimeout(() => {
      navigate('/login');
    }, 2000);
    }
    
  }
  return (
  
      
    <div className="h-screen lg:flex">
      
              <div className='hidden lg:block lg:w-[50%]'>
                   <img src={signupic} className="lg:w-[740px] lg:h-screen " alt="" />
              </div> 
      
           <div className="w-full mt-[20%] sm:mt-0 lg:w-[50%] p-8 items-center justify-center">
              <div className="text-center mt-[15%]">
              <h3 className=" font-semibold text-lg sm:text-2xl text-[#00302E] ">Welcome To Lilies!</h3>
              </div>
              
              
              <form className="flex flex-col items-center mt-10">

                  <input type="text" id='username' value={username} onChange={(e) => setUsername(e.target.value)} required placeholder='Your First Name' className="w-[80%] h-[71px] p-3 border-2 rounded-md border-[#FBDDBB82] placeholder:text-sm focus:border-[#42b9b5] outline-none  " />

                  <input type="email" id='email' value={email} onChange={(e) => setEmail(e.target.value)} required className="mt-10 mb-10 w-[80%] h-[71px] p-3 border-2 rounded-md border-[#FBDDBB82] placeholder:text-sm focus:border-[#42b9b5] outline-none " placeholder='Your Email Address' />
      
                <div className='relative w-[80%]'>
                  <input type={showPassword ? "text" : "password"} id='password' value={password} onChange={(e) => setPassword  (e.target.value)} required className=" w-full h-[71px] p-3 border-2 rounded-md border-[#FBDDBB82] placeholder:text-sm focus:border-[#42b9b5] outline-none " placeholder='Your Password' />

                  <span onClick={togglePasswordVisibility} className="absolute right-3 top-7 cursor-pointer">
                      {showPassword ? <FaEyeSlash /> : <FaEye />}
                  </span>
                </div>
      
                  <button onClick={handleSubmit} className="mt-6 w-[80%] h-[60px] p-3 rounded-md bg-[#00302E] text-[#FBDDBB] font-medium text-sm  active:bg-[#08251e] active:scale-95 transition ">SIGN UP</button>
              </form>
      
              <div className="flex items-center justify-center mt-5">

              <p className="font-[400] text-sm ">Already have an account. 
                <Link to="/login" className="text-[#00302E] font-bold text-sm  hover:text-orange-400"> LOGIN</Link> 
              </p>
      
            
           </div>
           </div>
      
           
          </div>
  )
}

export default SignUp
