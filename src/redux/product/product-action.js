import ProductActionTypes from "./product-types";

export const addProductByID = productID => ({
    type: ProductActionTypes.ADD_PRODUCT_ID,
    payload: productID
});