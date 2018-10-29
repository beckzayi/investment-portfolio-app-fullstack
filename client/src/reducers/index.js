import { combineReducers } from 'redux';
import sharesReducer from './sharesReducer';
import balanceReducer from './balanceReducer';
import selectedShareReducer from './selectedShareReducer';
import ordersReducer from './ordersReducer';
import selectedShareRealApiReducer from './selectedShareRealApiReducer';

const rootReducers = combineReducers({
	shares: sharesReducer,
	balance: balanceReducer,
	selectedShare: selectedShareReducer,
	orders: ordersReducer,
	selectedShareRealApi: selectedShareRealApiReducer
});

export default rootReducers;
