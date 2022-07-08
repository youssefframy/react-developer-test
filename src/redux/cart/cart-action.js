import CartActionTypes from './cart-types';

export const toggleCartHidden = () => ({ 
    type: CartActionTypes.TOGGLE_CART_HIDDEN
});

export const addProduct = (product, attributes) => ({
    type: CartActionTypes.ADD_PRODUCT,
    payload: product,
    payload2: attributes
});

export const removeItem = item => ({
    type: CartActionTypes.REMOVE_ITEM,
    payload: item
});
