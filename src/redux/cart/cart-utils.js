export const addItemToCart = (cartItems, cartItemToAdd, attributes) => {
    const existingCartItems = cartItems.find(
        cartItem => {
            return (cartItem.id === cartItemToAdd.id && cartItem.selectedAttributes === attributes)
        }
    );
     
    const randomNumber = Math.floor(Math.random() * 100);

    if(existingCartItems){
        return cartItems.map(
                cartItem => cartItem.id === cartItemToAdd.id
                ? { ...cartItem, id:cartItem.id+randomNumber , quantity: cartItem.quantity +1, selectedAttributes: attributes}
                : cartItem
            )
    }

    return [...cartItems, {...cartItemToAdd, quantity: 1, selectedAttributes: attributes}];
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
