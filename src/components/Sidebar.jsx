import React from 'react'
import logo from '../assets/Group 12.png'
import housepic from '../assets/majesticons_home.png'
import profileicon from '../assets/majesticons_user-circle.png'
import OrderBtn from './OrderBtn'
import CartBtn from './CartBtn'
import { IoExitOutline } from "react-icons/io5";


const Sidebar = ({cart, handleRemoveFromCart, order, handleCheckout, handleRemoveOrder}) => {

  let subtitle;
  const [modalIsOpen, setIsOpen] = React.useState(false);

  function openModal() {
    setIsOpen(true);
  }

  function afterOpenModal() {
    // references are now sync'd and can be accessed.
    subtitle.style.color = '#f00';
  }

  function closeModal() {
    setIsOpen(false);
  }

  const handleLogout = () => {
    localStorage.removeItem("userInfo")
    window.location.href = '/'
  } 

  return (
    <div className='bg-[#FBFBFB] w-[23%] h-screen fixed flex flex-col z-10'>
      
      <div className='flex items-center w-[127px] h-[58px] mt-[30px] ml-[53px] ' >
        <img src={logo} className="w-[39px] h-[49px] items-center mr-3" alt="" />
        <p className="w-[92px] h-[46px] text-[32px] font-bold items-center text-black">Lilies</p>
      </div>

      <aside className='w-[90%] m-auto p-1 mt-[21%]'>

        <div className='w-[100%] h-[50px] flex bg-[#EFEFEF] items-center rounded-[12px]'>
          <img src={housepic} className='w-[24px] h-[24px] ml-3  ' alt="" />
          <button className='w-[106px] mt-1 ml-1 font-[400] text-[16px] '>Dashboard</button>
        </div>
        
        <div className='w-[100%] mt-2 h-[50px] flex items-center rounded-[12px]'>
          <img src={profileicon} className='w-[24px] h-[24px] ml-3' alt="" />
          <button className='w-[116px] mt-1 font-[400] text-[16px] text-[#707070]   '>Your Profile</button>
        </div>

        <OrderBtn order={order} handleRemoveOrder={handleRemoveOrder} />

        <CartBtn cart={cart} handleRemoveFromCart={handleRemoveFromCart} handleCheckout={handleCheckout}  />
        

        <div className='w-[100%] mt-2 h-[50px] flex items-center rounded-[12px]'>
          <IoExitOutline style={{marginLeft: "7.1%"}} />
          <button onClick={handleLogout} className='w-[107px] mt-1 font-[400] text-[16px] text-[#707070]'>Logout</button>
        </div>

      </aside>
    </div>
  )
}

export default Sidebar
