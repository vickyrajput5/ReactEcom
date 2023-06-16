import React from "react";
import FormetPrice from "../Helper/FormetPrice";
import CartAmountToggle from "./CartAmountToggle";
import { FaTrash } from "react-icons/fa";
import { useCartContext } from "../context/CartContext";


const CartItem = ({ id, name, image, color, price, amount }) => {
  
  const { removeItem } = useCartContext;
  // const[amount, setAmount] = useState(1);

  const setDec = () =>{
      // amount > 1 ? setAmount(amount -1 ): setAmount(1)
  }
  const setInc = () =>{
      // amount < stock ? setAmount(amount + 1) : setAmount(stock);
  }

  return (
    <div className="cart_heading grid grid-five-column">
      <div className="cart-image--name">
        <div>
          <figure>
            <img src={image} alt={id} />
          </figure>
        </div>
        <div>
          <p>{name}</p>
          <div className="color-div">
            <p>color:</p>
            <div
              className="color-style"
              style={{ backgroundColor: color, color: color }}></div>
          </div>
        </div>
      </div>
      {/* price   */}
      <div className="cart-hide">
        <p>
          <FormetPrice price={price} />
        </p>
      </div>

      {/* Quantity  */}
      <CartAmountToggle
        amount={amount}
        setDec={setDec}
        setInc={setInc}
      />

      {/* //Subtotal */}
      <div className="cart-hide">
        <p>
          <FormetPrice price={price * amount} />
        </p>
      </div>

      <div>
      <FaTrash className="remove_icon" onClick={() => removeItem(id)} />
      </div>
    </div>
  );
};

export default CartItem;