import {
    ADD_TO_CART,
    REMOVE_TO_CART,
    INCREASE_TO_CART,
    DECREASE_TO_CART,
} from "./actionTypes";
export const addTOCart = (product) => {
    return{
        type: ADD_TO_CART,
        playload: product,
    };
};
export const removFromCart = (product) => {
    return
}