import React, { useState } from 'react';
import Homepage from "./pages/Homepage"
import Login from "./pages/LoginPage"
import Register from "./pages/Register"
import Dashboard from "./pages/Dashboard"
import {Routes, Route} from "react-router"
import { toast, ToastContainer } from "react-toastify"
import FoodData from "./data.json";

const App = () => {

  const [cart, setCart] = useState([]);

  const [order, setOrder] = useState([]);

    const [count, setCount] = useState(0);

    const handleIncrement = (id) => {
      const itemCount = FoodData.filter((item) => item.id === id);
      const product = FoodData.find((item) => item.id === id);
      setCount(itemCount.map((item) => item.count++));
    };

    const handleDecrement = (id) => {
      const itemCount = FoodData.filter((item) => item.id === id);
      setCount(itemCount.map((item) => item.count--));
    };

    const handleAddToCart = (itemId) => {
      const productExist = cart.find((item) => item.id === itemId);

      if (productExist) {
        setCart([...cart])
        toast.error("Item already in cart", {autoClose: 1000});
      }else{
        const newItem = FoodData.filter((item) => item.id === itemId);
        const newCart = [...cart, ...newItem];
        setCart(newCart);
        toast.success("Item added to cart", {autoClose: 1000});
        setCount(0);
      }  

    };  

    const handleRemoveFromCart = (itemId) => {
      //remove item from cart
      const removeItem = cart.filter((item) => item.id !== itemId);
      setCart(removeItem);
      toast.error("Item removed from cart", {autoClose: 1000});
    }

    const handleCheckout = () => {
      // Move cart items to orders
      const newOrder = cart.map((item) => ({...item}));
    
      // Append new orders to existing ones
      setOrder((prevOrder) => [...prevOrder, ...newOrder]);
    
      // Clear the cart after checkout
      setCart([]);
    };

    const handleRemoveOrder = (id) => {
      // Filter out the order with the matching ID
      setOrder((prevOrder) => prevOrder.filter((order) => order.id !== id));
    };
    

  return (
      <div>
          <ToastContainer />
          <Routes>
            <Route path="/" element={<Homepage />} />
            <Route path="/register" element={<Register />} />
            <Route path="/login" element={<Login />} />
            <Route path="/dashboard" element={<Dashboard FoodData={FoodData}
            count={count}
            handleDecrement={handleDecrement}
            handleIncrement={handleIncrement}
            handleAddToCart={handleAddToCart}
            cart={cart}
            handleRemoveFromCart={handleRemoveFromCart}
            order={order}
            handleCheckout={handleCheckout}
            handleRemoveOrder={handleRemoveOrder}
         
            />} />
          </Routes>
      </div>
  )
}

export default App
