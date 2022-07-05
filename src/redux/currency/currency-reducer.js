import CurrencyActionTypes from "./currency-types";

import { indexOfCurrency } from "./currency-utils";

const INITIAL_STATE = {
    currencyList: [],
    currency: "$",
    currencyIndex: 0
}

const currencyReducer = (state = INITIAL_STATE, action) => { 
    switch (action.type) {
        case CurrencyActionTypes.ADD_CURRENCIES:
          return {
            ...state,
            currencyList: [...state.currencyList, action.payload]
          }

        case CurrencyActionTypes.SWITCH_CURRENCIES:
        return {
          ...state,
          currency: action.payload,
          currencyIndex: indexOfCurrency(state.currencyList, action.payload)
        }

        default:
            return state;
    }
}

export default currencyReducer;