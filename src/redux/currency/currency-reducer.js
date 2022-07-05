import CurrencyActionTypes from "./currency-types";
import { filterData } from "./currency-utils";

const INITIAL_STATE = {
    currency: "$",
    data: [],
    filteredDataByPrice: []
}

const currencyReducer = (state = INITIAL_STATE, action) => { 
    switch (action.type) {
        case CurrencyActionTypes.SWITCH_CURRENCIES:
          return {
            ...state,
            currency: action.payload,
            filteredDataByPrice: filterData(state.data, state.currency)
          }

        case CurrencyActionTypes.ADD_DATA:
          return{
            ...state,
            data: action.payload
          }


        default:
            return state;
    }
}

export default currencyReducer;