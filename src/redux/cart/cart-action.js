import CartActionTypes from './cart-types';

export const toggleCartHidden = () => ({ 
    type: CartActionTypes.TOGGLE_CART_HIDDEN
});

export const addCartAttribute = attribute => ({ 
    type: CartActionTypes.ADD_CART_ATTRIBUTE,
    payload: attribute
});

export const addProduct = product => ({
    type: CartActionTypes.ADD_PRODUCT,
    payload: product
});

export const removeItem = item => ({
    type: CartActionTypes.REMOVE_ITEM,
    payload: item
});
