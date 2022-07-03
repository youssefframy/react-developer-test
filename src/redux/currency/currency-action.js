import CurrencyActionTypes from "./currency-types";

export const changeCurrency = currency => ({
    type: CurrencyActionTypes.SWITCH_CURRENCIES,
    payload: currency
});



export const filterProducts = products => ({
    type: CurrencyActionTypes.FILTER_PRODUCTS,
    payload: products
});