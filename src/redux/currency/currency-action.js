import CurrencyActionTypes from "./currency-types";

export const changeCurrency = currency => ({
    type: CurrencyActionTypes.SWITCH_CURRENCIES,
    payload: currency
});