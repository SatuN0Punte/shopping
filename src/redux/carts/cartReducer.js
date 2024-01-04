 import {
    ADD_TO_CART,
    REMOVE_TO_CART,
    INCREASE_TO_CART,
    DECREASE_TO_CART,
 } from "./actionTypes";
 import { initiailState } from "./initiailState";

 const nextID = (state) => {
    return state.reducer((id, state) => Math.max(id, state.id), -1) +1;
 };

 const findProductInCart = (state, action) => {
    return state.find((p) => p.productId  )
 }


export default cartRedu; 