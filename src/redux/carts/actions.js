import {
    ADD_TO_CART,
    REMOVE_TO_CART,
    INCREASE_TO_CART,
    DECREASE_TO_CART,
} from "./actionTypes";

export const addToCart = (product) => {
    return {
        type: ADD_TO_CART,
        payload: product,
    };
};

export const removeFromCart = (productId) => {
    return {
        type: REMOVE_TO_CART,
        payload: productId,
    };
};

export const increaseToCart = (productId) => {
    return {
        type: INCREASE_TO_CART,
        payload: productId,
    };
};

export const decreaseToCart = (productId) => {
    return {
        type: DECREASE_TO_CART,
        payload: productId,
    };
};
