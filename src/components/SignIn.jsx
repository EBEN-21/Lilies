import { useState } from 'react'
import React from 'react'
import loginpic from '../assets/Group 13.png'
import { Link } from 'react-router'
import { toast } from 'react-toastify'
import { useNavigate } from 'react-router'


const SignIn = () => {

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

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
    <div className="flex h-screen">

        <div>
            <img src={loginpic} className="w-[590px] h-screen " alt="" />
        </div> 

     <div className="flex flex-col justify-center items-center mt-[11%] space-x-14">
        <div className="ml-[14%]">
        <h3 className=" h-[33px] font-[600] text-[27px] text-center text-[#00302E] ">Welcome Back!</h3>
        </div>
        

        
        <form className="items-center w-[420px]">
            <input type="email" id='email' value={email} onChange={(e) => setEmail(e.target.value)}  className=" w-[420px] p-4 mt-[10%] h-[71px] rounded-[10px] border-[2px] border-[#FBDDBB82] placeholder:text-[14px] placeholder:font-[600] " placeholder='Your Email Address' />

            <input type="password" id='password' value={password} onChange={(e) => setPassword  (e.target.value)} className=" w-[420px] p-4 mt-[10%] h-[71px] rounded-[10px] border-[2px] border-[#FBDDBB82] placeholder:text-[14px] placeholder:font-[600] " placeholder='Your Password' />

            <button onClick={handleLogin} className="w-[420px] mt-7 pt-[15px] pb-[15px] px-[40px] items-center bg-[#00302E] font-[500] text-[16px] text-[#FBDDBB] hover:bg-[#146a67] ">LOGIN</button>
        </form>

        <div className="flex justify-between w-[420px] mt-5">
       
        <Link to= "/register" className="w-[170px]  h-[33px] font-[400] text-[14px] text-[#00302E]    hover:text-orange-400">
                <p>Create an account</p>
        </Link>
        
        
        <a href="" className="w-[150px] ml-[39%] h-[33px] items-end font-[400] text-[14px] text-[#00302E] hover:text-orange-400">
            <p>Forgot Password</p>
        </a>
     </div>
     </div>

     
    </div>
  )
}

export default SignIn
