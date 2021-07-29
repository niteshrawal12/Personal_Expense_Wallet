import {combineReducers} from 'redux'
import ErrorReducer from './ErrorReducer';
import walletReducer from './walletReducer'

export default combineReducers({
    errors: ErrorReducer,
    wallet: walletReducer
});  