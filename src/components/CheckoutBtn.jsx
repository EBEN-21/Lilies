import React from "react";
import Modal from "react-modal";

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

const CheckoutBtn = ({handleCheckout}) => {

    let subtitle;
      const [modalIsOpen, setIsOpen] = React.useState(false);
    
      function openModal() {
        setIsOpen(true);
      }
    
      function closeModal() {
        setIsOpen(false);
      }

      const handleCheckoutClick = () => {
        handleCheckout(); // This function will handle transferring the cart to the orders
        closeModal(); // Close the modal after checkout
      };

  return (
    <div>
        <div className="flex items-center justify-center mt-5">
            <button onClick={openModal} className="w-[400px] bg-[#00302E] p-3 font-[600] text-[14px] text-center 
              text-[#F3C294] ">Checkout</button>
        </div>

        <Modal
                isOpen={modalIsOpen}
                onRequestClose={closeModal}
                style={customStyles}
                contentLabel="Example Modal"
        >
            <div className="flex flex-col mt-5 px-5">
                <h2 className="w-[84px] font-[600] text-[17px] text-[#00302E] ">Checkout</h2>

                <div className="flex flex-col items-center mt-6 ">
                    <form className="flex flex-col">
                        <input type="text" className="w-[488px] h-[71px] border-[1px] p-6 text-[14px] font-[400] border-[#FBDDBB] rounded-[5px] " placeholder="Reciever's Name" required />

                        <input type="text" className="w-[488px] h-[71px] border-[1px] p-6 text-[14px] font-[400] border-[#FBDDBB] rounded-[5px] mt-10 " placeholder="Phone Number" required/>

                        <input type="text" className="w-[488px] h-[71px] border-[1px] p-6 text-[14px] font-[400] border-[#FBDDBB] rounded-[5px] mt-10 " placeholder="Postal Code"  required/>

                        <input type="text" className="w-[488px] h-[71px] border-[1px] p-6 text-[14px] font-[400] border-[#FBDDBB] rounded-[5px] mt-10 " placeholder="House Address" required/>

                    </form>
                        <button className="w-[488px] h-[60px] bg-[#00302E] mt-8 text-center font-[600] text-[13px] text-[#F3C294]" onClick={handleCheckoutClick}>Make Payement</button>
                </div>
            </div>
        </Modal>
    </div>
  )
}

export default CheckoutBtn
