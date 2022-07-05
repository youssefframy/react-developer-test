import CurrencyActionTypes from "./currency-types";

export const changeCurrency = currency => ({
    type: CurrencyActionTypes.SWITCH_CURRENCIES,
    payload: currency
});

export const addData = data => ({
    type: CurrencyActionTypes.ADD_DATA,
    payload: data
});


export const filterData = products => ({
    type: CurrencyActionTypes.SWITCH_CURRENCIES,
    payload: products
});