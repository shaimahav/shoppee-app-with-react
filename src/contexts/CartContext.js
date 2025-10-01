import { createContext } from "react";
const initialParams={
    cartItem:[],
    storeCartItems:(product)=>{}
}
const CartContext=createContext(initialParams);
export default CartContext;