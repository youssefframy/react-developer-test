import ProductActionTypes from "./product-types";

const initialState = {
    productID: ""
}

const productReducer = (state = initialState, action) => {
  switch (action.type) {
  case ProductActionTypes.ADD_PRODUCT_ID:
    return { 
        ...state,
        productID: action.payload
    }

  default:
    return state
  }
};

export default productReducer;
