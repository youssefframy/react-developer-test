import ProductActionTypes from "./product-types";

const INITIAL_STATE = {
    products: [],
}

const productReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case ProductActionTypes.ADD_DATA_TO_PRODUCTS:
            return {
                ...state,
                products: action.payload
            }
          
        default:
            return state;
    }
}

export default productReducer;