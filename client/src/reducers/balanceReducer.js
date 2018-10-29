import {
	ADD_CREDITS,
	WITHDRAW_CREDITS,
	INCREASE_EQUITY,
	DECREASE_EQUITY
} from '../actions/types';
import fakeDatabase from '../api/database';

const initialBalance = fakeDatabase.balance;

export default function(state = initialBalance, action) {
	switch(action.type) {
		case ADD_CREDITS:
			return { ...state, credits: state.credits + action.payload };
		case WITHDRAW_CREDITS:
			return { ...state, credits: state.credits - action.payload };
		case INCREASE_EQUITY:
			return { ...state, equity: state.equity + action.payload };
		case DECREASE_EQUITY:
			return { ...state, equity: state.equity - action.payload }
		default:
			return state;
	}
}
