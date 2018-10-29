import { RECEIVE_SINGLE_SHARE } from '../actions/types';

export default function(state = {}, action) {
	switch(action.type) {
		case RECEIVE_SINGLE_SHARE:
			return action.payload;
		default:
			return state;
	}
}
