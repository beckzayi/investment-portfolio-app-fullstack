import React from 'react';
import { connect } from 'react-redux';
import './header.css';
import { formatNumber } from '../utils';

class Header extends React.Component {
	componentDidMount() {
		// this.props.fetchBalance();
	}

	render() {
		const { credits, equity } = this.props.balance;
		
		return(
			<div className="header border-bottom">
				<div className="account-status row">
					<div className="balance col-md-6">
						<div className="number">${ formatNumber(credits) }</div>
						<div className="text">Credits in Balance</div>
					</div>

					<div className="equity col-md-6">
						<div className="number">${ formatNumber(equity) }</div>
						<div className="text">Equity</div>
					</div>
				</div>

				<div className="clearfix"></div>
			</div>
		);
	}
}

function mapStateToProps(state) {
	return {
		balance: state.balance
	}
}

export default connect(
	mapStateToProps
)(Header);
