import {
	SEARCH_SHARE,
	RECEIVE_SHARES
} from '../actions/types';

// Below could be used as hardcode data for simple testing.
// const initialShares = [
// 	{
// 		symbol: "AAPL",
// 		name: "Apple",
// 		rate: 100.00,
// 		favorite: false
// 	},
// 	{
// 		symbol: "FB",
// 		name: "Facebook",
// 		rate: 200.00,
// 		favorite: false
// 	},
// 	{
// 		symbol: "GOOGL",
// 		name: "Google",
// 		rate: 50.00,
// 		favorite: false
// 	},
// 	{
// 		symbol: "JD",
// 		name: "JD.com",
// 		rate: 20.45,
// 		favorite: false
// 	},
// 	{
// 		symbol: "MSFT",
// 		name: "Microsoft",
// 		rate: 10.00,
// 		favorite: false
// 	},
// 	{
// 		symbol: "TSLA",
// 		name: "Tesla",
// 		rate: 288.54,
// 		favorite: false
// 	},
// 	{
// 		symbol: "0700.HK",
// 		name: "Tencent",
// 		rate: 274.92,
// 		favorite: false
// 	}
// ];

const initialShares = [];

export default function(state = initialShares, action) {
	switch(action.type) {
		case SEARCH_SHARE:
			return action.payload;
		case RECEIVE_SHARES:
			return action.payload;
		default:
			return state;
	}
}
