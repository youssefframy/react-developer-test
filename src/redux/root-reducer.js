import { combineReducers } from 'redux';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import cartReducer from './cart/cart-reducer';
import currencyReducer from './currency/currency-reducer';

const persistConfig = {
    key: 'root',
    storage,
    whitelist: ['cart', 'currency']
}

const rootReducer = combineReducers({
    cart: cartReducer,
    currencySwitcher: currencyReducer
});

export default persistReducer(persistConfig, rootReducer);