import React from 'react'
import Modal from "react-modal";
import ordericon from '../assets/majesticons_calendar.png'


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

const OrderBtn = ({order}) => {

    
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
        
  return (
    <div>
      <div className='w-[100%] mt-2 h-[50px] flex items-center rounded-[12px]'>
          <img src={ordericon} className='w-[24px] h-[24px] ml-3' alt="" />
          <button onClick={openModal} className='w-[74px] mt-1 ml-1 font-[400] text-[16px] text-[#707070] '>Orders</button>

          <div className="ml-[74px]">
                <span className='w-[25px] h-[25px] bg-[#06E775] items-center justify-center flex border-[1px]  font-[700] text-[16px] rounded-[5px]  '>{order?.length || 0}</span>
            </div>
        </div>

      <Modal
        isOpen={modalIsOpen}
        onAfterOpen={afterOpenModal}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Example Modal"
      >
        
      </Modal>
    </div>
  );
}

export default OrderBtn
