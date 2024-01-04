import {
    ADD_TO_CART,
    REMOVE_TO_CART,
    INCREASE_TO_CART,
    DECREASE_TO_CART,
} from "./actionTypes";
import { initialState } from "./initialState";

const nextID = (state) => {
    return state.reduce((id, state) => Math.max(id, state.id), -1) + 1;
};

const findProductInCart = (state, action) => {
    return state.find((p) => p.productId === action.productId);
};

const cartReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_TO_CART:
            // Check if the product is already in the cart
            const existingProduct = findProductInCart(state, action);

            if (existingProduct) {
                // If the product is already in the cart, increase its quantity
                return state.map((p) =>
                    p.productId === action.productId
                        ? { ...p, quantity: p.quantity + 1 }
                        : p
                );
            } else {
                // If the product is not in the cart, add it
                return [
                    ...state,
                    {
                        id: nextID(state),
                        productId: action.productId,
                        quantity: 1,
                    },
                ];
            }

        case REMOVE_TO_CART:
            // Remove the product from the cart
            return state.filter((p) => p.productId !== action.productId);

        case INCREASE_TO_CART:
            // Increase the quantity of the specified product in the cart
            return state.map((p) =>
                p.productId === action.productId
                    ? { ...p, quantity: p.quantity + 1 }
                    : p
            );

        case DECREASE_TO_CART:
            // Decrease the quantity of the specified product in the cart
            return state.map((p) =>
                p.productId === action.productId
                    ? { ...p, quantity: Math.max(1, p.quantity - 1) }
                    : p
            );

        default:
            return state;
    }
};

export default cartReducer;
