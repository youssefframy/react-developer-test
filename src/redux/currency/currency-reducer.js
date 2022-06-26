import CurrencyActionTypes from "./currency-types";
import { filterProducts } from "./currency-utils";

const INITIAL_STATE = {
    currency: "$"
}

const currencyReducer = (state = INITIAL_STATE, action) => { 
    switch (action.type) {
        case CurrencyActionTypes.SWITCH_CURRENCIES:
          return {
            ...state,
            currency: action.payload
          }
          
          default:
            return state;
    }
}

export default currencyReducer;