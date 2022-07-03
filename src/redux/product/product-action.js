import CurrencyActionTypes from "./product-types";

export const addDataToProducts = data => ({
    type: CurrencyActionTypes.ADD_DATA_TO_PRODUCTS,
    payload: data
});