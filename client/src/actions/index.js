import {
	ADD_CREDITS,
	WITHDRAW_CREDITS,
	INCREASE_EQUITY,
	DECREASE_EQUITY,
	RECEIVE_SHARES,
	RECEIVE_SINGLE_SHARE,
	FETCH_ORDERS,
	ADD_ORDER,
	TOGGLE_FAVORITE,
	REAL_API_RECEIVE_SINGLE_SHARE,
	REAL_API_REQUEST_SINGLE_SHARE
} from './types';

import {
	apiFetchShares,
	apiFetchShareBySymbol,
	realApiFetchShare
} from '../api';

export function addCredits(amount) {
	return function(dispatch) {
		dispatch({
			type: ADD_CREDITS,
			payload: amount
		});
	}
}

export function withdrawCredits(amount) {
	return function(dispatch) {
		dispatch({
			type: WITHDRAW_CREDITS,
			payload: amount
		});
	}
}

export function increaseEquity(amount) {
	return function(dispatch) {
		dispatch({
			type: INCREASE_EQUITY,
			payload: amount
		});
	}
}

export function decreaseEquity(amount) {
	return function(dispatch) {
		dispatch({
			type: DECREASE_EQUITY,
			payload: amount
		});
	}
}

function receiveShares(shares) {
	return {
		type: RECEIVE_SHARES,
		payload: shares
	}
}

function receiveSingleShare(share) {
	return {
		type: RECEIVE_SINGLE_SHARE,
		payload: share
	}
}

export function fetchShares(dispatch) {
	return function(dispatch) {
		apiFetchShares().then(shares => {
			dispatch(receiveShares(shares));
		});
	}
}

export function searchShare(symbol) {
	return function(dispatch) {
		apiFetchShares(symbol).then(shares => {
			dispatch(receiveShares(shares));
		});
	}
}

export function fetchShareBySymbol(symbol) {
	return function(dispatch) {
		apiFetchShareBySymbol(symbol).then(share => {
			dispatch(receiveSingleShare(share));
		})
	}
}

function realApiRequestShareBySymbol(symbol) {
	return {
		type: REAL_API_REQUEST_SINGLE_SHARE
	}
}

export function realApiFetchShareBySymbol(symbol) {
	return function(dispatch) {
		dispatch(realApiRequestShareBySymbol);

		realApiFetchShare(symbol).then(share => {
			dispatch({
				type: REAL_API_RECEIVE_SINGLE_SHARE,
				payload: share
			});
		});
	}
}

export function fetchOrder() {
	return {
		type: FETCH_ORDERS
	}
}

export function addOrder(order) {
	return {
		type: ADD_ORDER,
		payload: order
	}
}

export function toggleFavorite(share) {
	return {
		type: TOGGLE_FAVORITE,
		payload: share
	}
}
