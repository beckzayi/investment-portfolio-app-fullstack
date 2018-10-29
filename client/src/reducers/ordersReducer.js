import { 
	FETCH_ORDERS,
	ADD_ORDER
} from '../actions/types';
import fakeDatabase from '../api/database';

const initialOrder = fakeDatabase.orders;

export default function(state = initialOrder, action) {
	switch (action.type) {
		case FETCH_ORDERS:
			return state;
		case ADD_ORDER:
			return [ ...state, action.payload ];
		default:
			return state;
	}
}
