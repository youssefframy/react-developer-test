import CurrencyActionTypes from "./currency-types";
import { filterProducts } from "./currency-utils";

const INITIAL_STATE = {
    currency: "$",
    products: [],
    filteredProducts: [],
}

const currencyReducer = (state = INITIAL_STATE, action) => { 
    switch (action.type) {
        case CurrencyActionTypes.SWITCH_CURRENCIES:
          return {
            ...state,
            currency: action.payload
          }

        case CurrencyActionTypes.ADD_DATA_TO_PRODUCTS:
            return {
                ...state,
                products: action.payload
            }
          
        case CurrencyActionTypes.FILTER_PRODUCTS:
        return {
            ...state,
            filteredProducts: filterProducts(action.payload, state.currency)
        }
        default:
        return state;
    }
}

export default currencyReducer;