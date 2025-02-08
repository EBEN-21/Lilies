import React from 'react'
import Sidebar from '../components/Sidebar'
import Board from '../components/Board'

const Dashboard = ({ FoodData, count, handleDecrement, handleIncrement, stock, handleAddToCart, cart, order, handleRemoveFromCart }) => {
  return (
    <div className='relative m-auto h-auto'>
      
      <Sidebar cart={cart} order={order} handleRemoveFromCart={handleRemoveFromCart} />
      <Board 
      FoodData={FoodData} count={count} stock={stock}
      handleDecrement={handleDecrement} handleIncrement={handleIncrement}
      handleAddToCart={handleAddToCart}
       />

    </div>
  )
}

export default Dashboard
