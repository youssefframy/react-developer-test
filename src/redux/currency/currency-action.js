import CurrencyActionTypes from "./currency-types";

export const toggleCurrencyHidden = () => ({ 
    type: CurrencyActionTypes.TOGGLE_CURRENCY_HIDDEN
});

export const closeCurrencyOverlay = () => ({ 
    type: CurrencyActionTypes.CLOSE_CURRENCY_OVERLAY
});

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