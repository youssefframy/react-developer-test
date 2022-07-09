export const addItemToCart = (cartItems, cartItemToAdd, attributes, newProductId) => {
    const existingCartItems = cartItems.find(
        cartItem => {
            return (cartItem.id === newProductId);
        }
    );
    
    if(existingCartItems){
        return cartItems.map(
                cartItem => cartItem.id === newProductId
                ? { ...cartItem, quantity: cartItem.quantity +1, selectedAttributes: attributes}
                : cartItem
            )
    }

    return [...cartItems, {...cartItemToAdd,id: newProductId, quantity: 1, selectedAttributes: attributes}];
};

export const removeItemFromCart =  (cartItems, cartItemToRemove) => {
    const existingCartItems = cartItems.find(
        cartItem => cartItem.id === cartItemToRemove.id
    );

    if(existingCartItems.quantity === 1) {
        return cartItems.filter(cartItem => cartItem.id !== cartItemToRemove.id)
    }

    return cartItems.map(cartItem => cartItem.id === cartItemToRemove.id 
        ? { ...cartItem, quantity: cartItem.quantity - 1 }
        : cartItem
    );
};
