import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Sidebar from './Sidebar';
import Header from './Header';
import ShareList from './share/ShareList';
import Deposit from './Deposit';
import Withdraw from './Withdraw';
import FavoriteList from './FavoriteList';
import OrderList from './order/OrderList';
import Share from './share/Share';

class App extends React.Component {
	render() {
		return(
			<div className="application container-fluid">
				<BrowserRouter>
					<div className="row">
						<div className="col-md-2 bg-dark">
							<Sidebar />
						</div>

						<div className="col-md-10">
							<Header />
							<Route exact={true} path="/" component={ShareList} />
							<Route path="/deposit" component={Deposit} />
							<Route path="/withdraw" component={Withdraw} />
							<Route path="/favorites" component={FavoriteList} />
							<Route path="/orders" component={OrderList} />
							<Route path="/share/:symbol" component={Share} />
						</div>
					</div>
				</BrowserRouter>
			</div>
		);
	}
}

export default App;
