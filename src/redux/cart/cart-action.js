import CartActionTypes from './cart-types';

export const toggleCartHidden = () => ({ 
    type: CartActionTypes.TOGGLE_CART_HIDDEN
});

export const addProduct = product => ({
    type: CartActionTypes.ADD_PRODUCT,
    payload: product
});