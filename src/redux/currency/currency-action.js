import CurrencyActionTypes from "./currency-types";

export const addCurrencies = currencies => ({
    type: CurrencyActionTypes.ADD_CURRENCIES,
    payload: currencies
});

export const changeCurrency = currency => ({
    type: CurrencyActionTypes.SWITCH_CURRENCIES,
    payload: currency
});

export const currencyIndex = currency => ({
    type: CurrencyActionTypes.CURRENCY_INDEX,
    payload: currency
})