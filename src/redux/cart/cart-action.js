import CartActionTypes from './cart-types';

export const closeCartOverlay = () => ({
    type: CartActionTypes.CLOSE_CART_OVERLAY
})

export const toggleCartHidden = () => ({ 
    type: CartActionTypes.TOGGLE_CART_HIDDEN
});

export const addProduct = (product, attributes, newProductId) => ({
    type: CartActionTypes.ADD_PRODUCT,
    payload: product,
    payload2: attributes,
    payload3: newProductId
});

export const removeItem = item => ({
    type: CartActionTypes.REMOVE_ITEM,
    payload: item
});
