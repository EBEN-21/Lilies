import React from 'react'
import Sidebar from '../components/Sidebar'
import Board from '../components/Board'

const Dashboard = ({ FoodData, count, handleDecrement, handleIncrement, stock, handleAddToCart, cart,handleRemoveFromCart, order, handleCheckout, handleRemoveOrder }) => {
  return (
    <div className='flex h-auto'>
      
      <Sidebar cart={cart}  handleRemoveFromCart={handleRemoveFromCart} order={order} handleCheckout={handleCheckout} handleRemoveOrder={handleRemoveOrder}
         />
      <Board 
      FoodData={FoodData} count={count} stock={stock}
      handleDecrement={handleDecrement} handleIncrement={handleIncrement}
      handleAddToCart={handleAddToCart} 
       />

    </div>
  )
}

export default Dashboard
