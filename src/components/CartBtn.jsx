import React from "react";
import Modal from "react-modal";
import carticon from '../assets/carticon.png'
import CartList from "./CartList";
import CheckoutBtn from "./CheckoutBtn";


const customStyles = {
  overlay: {
    position: "fixed",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: "#C4C4C46B",
    zIndex: 999,
  },

  content: {
    position: "absolute",
    height: "100vh",
    top: "0px",
    left: "50%",
    right: "0px",
    border: "none",
    background: "#fff",
    overflow: "auto",
    webkitOverflowScrolling: "touch",
    outline: "none",
    padding: "20px",
  },
};

Modal.setAppElement("#root");

const CartBtn = ({cart, handleRemoveFromCart, handleCheckout}) => {

  const totalAmount = cart.reduce((acc, item) => acc + item.price * item.count, 0);

  let subtitle;
  const [modalIsOpen, setIsOpen] = React.useState(false);

  function openModal() {
    setIsOpen(true);
  }

  function afterOpenModal() {
    // references are now sync'd and can be accessed.
    subtitle.style.color = "#f00";
  }

  function closeModal() {
    setIsOpen(false);
  }

  return (
    <div>
        <div className='w-[100%] mt-2 h-[50px] flex items-center rounded-[12px]'>
            <img src={carticon} className='w-[15px] h-[17px] ml-[19px] ' alt="" />
            <button onClick={openModal} className='ml-4 mt-1 font-[400] text-[16px] text-[#707070]'>Your Cart</button>
            <div className="ml-8">
                <span className='w-[25px] h-[25px] bg-[#F3C294] items-center justify-center flex border-[1px]  font-[700] text-[16px] rounded-[5px]  '>{cart?.length || 0 }</span>
            </div>
        </div>
      <Modal
        isOpen={modalIsOpen}
        onAfterOpen={afterOpenModal}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Example Modal"
      >
      {cart?.length === 0 ?(
        <div className='flex mt-[40%] items-center justify-center'>
          <h1 className="font-[500] text-[20px] text-[#00302E] ">Your Cart is Empty</h1>
        </div>
      ) : (
          
          <div>
            <h1 className="w-[102px] px font-[800] text-[17px] text-[#00302E] ">Your Cart</h1>
            <div className="w-full mt-3  px-3 flex items-center justify-between">
                <h2 className="w-[50px] font-[500] text-[13px] text-[#000000B0] ">Item</h2>
                <ul className="flex justify-between items-center ">
                  <h2 className="w-[23px] font-[500] text-[13px] text-[#000000B0]  mr-11">Qty</h2>
                  <h2 className="w-[62px] mr-9 font-[500] text-[13px] text-[#000000B0]">Unit Price</h2>
                  <h2 className="w-[70px] font-[500] text-[13px] text-[#000000B0]">Sub-Total</h2>
                </ul>
              </div>
              {cart.map((item) => (
                <CartList
                  key={item.id}
                  id={item.id}
                  image={item.image}
                  title={item.title}
                  qty={item.count}
                  unitPrice={item.price}
                  subTotal={item.price * item.count}
                  handleRemoveFromCart={handleRemoveFromCart} 
                />
              ))}

              <div className="w-full px-3 flex items-center justify-end mt-5">
                <h2 className="w-[48px] font-[600] text-[17px] text-[#000000B0] ">Total:</h2>
                <p className="w-[90px] font-[700] text-[20px] text-[#00302E] ml-5 ">₦{totalAmount}</p>
              </div>

              <CheckoutBtn handleCheckout={handleCheckout} />
          </div>
        
      )}
      
      </Modal>
    </div>
  );
};

export default CartBtn;
