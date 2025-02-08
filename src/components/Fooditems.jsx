import React from 'react'
import Modal from "react-modal";
import FoodDetails from "./FoodDetails";

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
    left: "55%",
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

const Fooditems = ({
  image,
  title,
  description,
  price,
  count,
  stock,
  handleIncrement,
  handleDecrement,
  id,
  handleAddToCart,
}) => {
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

      <div>
          <div className='w-[200px] h-[293px] mb-[9%] rounded-[5px] border-[0.3px] border-[rgba(0, 48, 46, 0.14)] flex flex-col items-center justify-center '>
      
          <img src={image} className='w-[90px] h-[90px] ' alt="" />

          <h1 className='w-[200px] h-[33px] mt-3 text-center text-[17px] font-[600] text-[#00302E] '>{title}</h1>

          <p className='w-[172px] h-[42px] mt-1 font-[400] text-[11px] text-center text-[#000000B0] '>{description}</p>

          <ul className='flex items-center justify-between w-[176px] mt-3 mr-2  '>
            <li className='w-[68px]  font-[700] text-center text-[13px] text-[#00302E] '>₦{price}</li>

            <button onClick={openModal} className='w-[78px] font-[500] text-[13px] text-[#06E775] '>Add to cart</button>
          </ul>
        </div>
      </div>

      <Modal
        isOpen={modalIsOpen}
        onAfterOpen={afterOpenModal}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Example Modal"
      >
        <FoodDetails
          image={image}
          title={title}
          description={description}
          price={price}
          readiness={"10-20 mins"}
          count={count}
          stock={stock}
          handleDecrement={handleDecrement}
          handleIncrement={handleIncrement}
          id={id}
          handleAddToCart={handleAddToCart}
        />
      </Modal>

    </div>
  )
}

export default Fooditems
