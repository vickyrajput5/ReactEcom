import React from "react";
import { FaMinus, FaPlus } from "react-icons/fa";

const CartAmountToggle = ({amount, setInc , setDec}) => {
  return (
    <div className="cart-button">
      <div className="amount-toggle">
        <button >
          <FaMinus onClick={()=>setDec()}/>
        </button>
        <div className="amount-style">{amount}</div>
        <button >
          <FaPlus onClick={()=> setInc()}/>
        </button>
      </div>
    </div>
  );
};

export default CartAmountToggle;