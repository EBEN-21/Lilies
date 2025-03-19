import React from "react";
import Modal from "react-modal";
import ordericon from '../assets/majesticons_calendar.png'
import OrderList from "./OrderList";

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

const OrderBtn = ({order, handleRemoveOrder}) => {

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
            <img src={ordericon} className='w-[19px] h-[20px] ml-[17px] ' alt="" />
            <button onClick={openModal} className=' ml-4 mr-1 mt-1 font-[400] text-[16px] text-[#707070]'>Orders</button>
            <div className="ml-12">
                <span className='w-[25px] h-[26px] mr-2 bg-[#6add35] items-center justify-center flex border-[1px]  font-[700] text-[16px] rounded-[5px]  '>{order?.length || 0 }</span>
            </div>
        </div>
      <Modal
        isOpen={modalIsOpen}
        onAfterOpen={afterOpenModal}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Example Modal"
      >
      {order?.length === 0 ?(
        <div className='flex mt-[40%] items-center justify-center'>
          <h1 className="font-[500] text-[20px] text-[#00302E] ">No Orders Yet</h1>
        </div>
      ) : (
          
          <div>
            <h1 className="w-[106px] px font-[800] text-[17px] text-[#00302E] ">Your Orders</h1>
            <div className="w-full mt-3  px-3 flex items-center justify-between">
                <h2 className="w-1/2 font-[500] text-[13px] text-[#000000B0] ">Item</h2>
                <ul className="w-1/2 mr-3 flex justify-between items-center ">
                  <h2 className="w-[23px] font-[500] text-[13px] text-[#000000B0]">Qty</h2>
                  <h2 className="w-[70px] font-[500] text-[13px] text-[#000000B0]">Sub-Total</h2>
                  <h2 className="w-[62px]  font-[500] text-[13px] text-[#000000B0]">Status</h2>
                </ul>
              </div>
              {order.map((item) => (
                <OrderList
                  key={item.id}
                  id={item.id}
                  image={item.image}
                  title={item.title}
                  qty={item.count}
                  ready={item.ready}
                  subTotal={item.price * item.count}
                  handleRemoveOrder={handleRemoveOrder}
                />
              ))}

          </div>
        
      )}
      
      </Modal>
    </div>
  );
};

export default OrderBtn;
