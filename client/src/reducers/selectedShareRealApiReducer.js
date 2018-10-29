import { REAL_API_RECEIVE_SINGLE_SHARE, REAL_API_REQUEST_SINGLE_SHARE } from '../actions/types';

export default function(state = {}, action) {
	switch(action.type) {
		case REAL_API_RECEIVE_SINGLE_SHARE:
			return action.payload;
		case REAL_API_REQUEST_SINGLE_SHARE:
			return {};
		default:
			return state;
	}
}
