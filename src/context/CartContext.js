import { createContext, useContext, useEffect, useReducer } from "react";
import reducer from "../reducer/CartReducer";
const CartContext = createContext()

const getLocalCartData = () =>{
    let localCartData = localStorage.getItem("WaqarCart");
    if(localCartData === []){
        return []
    }else{
        return JSON.parse(localCartData)
    }
} 


const initialState = {
// cart:[],
cart: getLocalCartData(),
total_item: "",
total_amount: "",
shipping_fee: 5000,
}

export const CartProvider =({children})=>{
    const [state , dispatch] =  useReducer(reducer, initialState)
   const addToCart = (id, color , amount , product) =>{
       dispatch({type: "ADD_TO_CART", payload:{id, color , amount , product}})
   }
// remove items 
const removeItem = (id) => {
    dispatch({ type: "REMOVE_ITEM", payload: id });
  };

// to clear the cart


const clearCart = ()=>{
    dispatch({type: "CLEAR_CART"})
} 


//   Add local storage data 
 useEffect(()=>{
     localStorage.setItem("WaqarCart", JSON.stringify(state.cart))
 }, [state.cart]) 
    return <CartContext.Provider value={{ ...state, addToCart, removeItem, clearCart}}>{children}</CartContext.Provider>
}

export const useCartContext = () =>{
    return useContext(CartContext)
}