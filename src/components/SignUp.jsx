import React from 'react'
import { useState } from 'react'
import { useNavigate } from 'react-router'
import signupic from '../assets/Group 14.png'
import { Link } from 'react-router'
import { toast } from 'react-toastify'

const SignUp = () => {

  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

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
  
      
      <div className="flex h-screen">
      
              <div>
                   <img src={signupic} className="w-[600px] h-[540px] " alt="" />
              </div> 
      
           <div className="flex flex-col justify-center items-center mt-[9%] space-x-14">
              <div className="ml-[14%]">
              <h3 className=" font-[600] text-[27px] text-center text-[#00302E] ">Welcome To Lilies!</h3>
              </div>
              
              
              <form className="items-center w-[420px]">

                  <input type="text" id='username' value={username} onChange={(e) => setUsername(e.target.value)} required className=" w-[420px] p-4 mt-[7%] h-[54px] rounded-[10px] border-[2px] border-[#FBDDBB82] text-[16px] placeholder:text-[14px] placeholder:font-[600] " placeholder='Your First Name' />

                  <input type="email" id='email' value={email} onChange={(e) => setEmail(e.target.value)} required className=" w-[420px] p-4 mt-[7%] h-[54px] rounded-[10px] border-[2px] border-[#FBDDBB82] text-[16px] placeholder:text-[14px] placeholder:font-[600] " placeholder='Your Email Address' />
      
                  <input type="password" id='password' value={password} onChange={(e) => setPassword  (e.target.value)} required className=" w-[420px] p-4 mt-[7%] h-[54px] rounded-[10px] border-[2px] border-[#FBDDBB82] text-[16px] placeholder:text-[14px] placeholder:font-[600] " placeholder='Your Password' />
      
                  <button onClick={handleSubmit} className="w-[420px] mt-5 pt-[15px] pb-[15px] px-[40px] items-center bg-[#00302E] font-[500] text-[16px] text-[#FBDDBB] hover:bg-[#146a67] ">SIGN UP</button>
              </form>
      
              <div className="flex items-center w-[420px] mt-5">

              <p className="w-[230px] ml-[23%] font-[400] text-[14px] ">Already have an account. 
                <Link to="/login" className="text-[#00302E] font-bold  hover:text-orange-400"> LOGIN</Link> 
              </p>
      
            
           </div>
           </div>
      
           
          </div>
  )
}

export default SignUp
