// Mock fake data
// It includes share information and the balance of the user.

const fakeDatabase = {
	shares: [
		{
			symbol: "AAPL",
			name: "Apple",
			rate: 100.00,
			favorite: false
		},
		{
			symbol: "FB",
			name: "Facebook",
			rate: 200.00,
			favorite: false
		},
		{
			symbol: "GOOGL",
			name: "Google",
			rate: 50.00,
			favorite: false
		},
		{
			symbol: "JD",
			name: "JD.com",
			rate: 20.45,
			favorite: false
		},
		{
			symbol: "MSFT",
			name: "Microsoft",
			rate: 10.00,
			favorite: false
		},
		{
			symbol: "NFLX",
			name: "Netflix",
			rate: 299.70,
			favorite: false
		},
		{
			symbol: "TSLA",
			name: "Tesla",
			rate: 288.54,
			favorite: false
		},
		{
			symbol: "0700.HK",
			name: "Tencent",
			rate: 274.92,
			favorite: false
		},
		{
			symbol: "TWTR",
			name: "Twitter",
			rate: 32.42,
			favorite: false
		}
	],
	balance: {
		credits: 8000,
		equity: 0
	},
	favorites: [],
	orders: []
};

export default fakeDatabase;