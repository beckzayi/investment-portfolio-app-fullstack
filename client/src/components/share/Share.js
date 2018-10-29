import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { addCredits, withdrawCredits, increaseEquity, decreaseEquity, fetchShareBySymbol, addOrder, realApiFetchShareBySymbol } from '../../actions';
import { formatNumber, formatPercentage } from '../../utils';

class Share extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			buyValue: 10,
			sellValue: 10,
			errorOfCredit: false,
			errorOfEquity: false
		};

		this.defaultBuyChangeValue = 10;
		this.defaultSellChangeValue = 10;
	}

	componentDidMount() {
		const { match } = this.props;
		this.props.fetchShareBySymbol(match.params.symbol);

		this.props.realApiFetchShareBySymbol(match.params.symbol);
	}

	handleBuySubmit = (e) => {
		e.preventDefault();

		if (this.state.buyValue <= 0) {
			return;
		}

		const transactionValue = this.state.buyValue * Number(this.props.selectedShare.rate);

		const { balance } = this.props.balance;
		if (transactionValue > balance) {
			this.setState({ errorOfCredit: true });
			return;
		}

		if (this.state.errorOfCredit) {
			this.setState({ errorOfCredit: false });
		}

		this.props.withdrawCredits(transactionValue);
		this.props.increaseEquity(transactionValue);

		this.handleAddOrder(this.props.selectedShare, 'buy', this.state.buyValue, transactionValue);
	}

	handleAddOrder = (share, type, share_num, amount) => {
		const now = new Date();
		this.props.addOrder({
			id: now,
			share: share,
			type: type,
			shares: share_num,
			amount: amount,
			createdAt: now.toLocaleDateString("en-AU")
		});
	}

	handleBuyChange = (e) => {
		if (e.target.value < 0) {
			return;
		}
		this.setState({ buyValue: Number(e.target.value) });
	}

	handleBuyIncrease = () => {
		this.setState({ buyValue: this.state.buyValue + this.defaultBuyChangeValue });
	}

	handleBuyDecrease = () => {
		if (this.state.buyValue < this.defaultBuyChangeValue) {
			return;
		}
		this.setState({ buyValue: this.state.buyValue - this.defaultBuyChangeValue });
	}

	handleSellSubmit = (e) => {
		e.preventDefault();

		if (this.state.sellValue <= 0) {
			return;
		}

		const transactionValue = this.state.sellValue * Number(this.props.selectedShare.rate);

		const { equity } = this.props.balance;
		if (transactionValue > equity) {
			this.setState({ errorOfEquity: true });
			return;
		}

		if (this.state.errorOfEquity) {
			this.setState({ errorOfEquity: false });
		}

		this.props.addCredits(transactionValue);
		this.props.decreaseEquity(transactionValue);
	}

	handleSellChange = (e) => {
		if (e.target.value < 0) {
			return;
		}
		this.setState({ sellValue: Number(e.target.value) });
	}

	handleSellIncrease = () => {
		this.setState({ sellValue: this.state.sellValue + this.defaultSellChangeValue });
	}

	handleSellDecrease = () => {
		if (this.state.sellValue < this.defaultSellChangeValue) {
			return;
		}
		this.setState({ sellValue: this.state.sellValue - this.defaultSellChangeValue });
	}

	renderBreadcrumb() {
		return(
			<nav aria-label="breadcrumb">
			  <ol className="breadcrumb mb-0 bg-transparent">
			    <li className="breadcrumb-item"><Link to="/">Home</Link></li>
			    <li className="breadcrumb-item active" aria-current="page">Share</li>
			  </ol>
			</nav>
		);
	}

	renderShareContent() {
		const { selectedShare } = this.props;

		return(
			<div className="border-bottom pb-4">
				<h2>{selectedShare.name}</h2>
				<div className="row">
					<div className="col-md-8">({selectedShare.symbol})</div>
					<div className="col-md-4">
						<div>
							<span className="mr-4 align-middle">
								Current rate: <span className="text-danger">${ formatNumber(selectedShare.rate) }</span>
							</span>
							<span>
								{	selectedShare.favorite
									? <i className="material-icons align-middle pointer">star</i> 
									: <i className="material-icons align-middle pointer">star_border</i>
								}
							</span>
						</div>
					</div>
				</div>
			</div>
		);
	}

	renderRealApiContent() {
		const { selectedShareRealApi } = this.props;
		
		return(
			<div className="real_api pt-4 border-top">
				<div className="pt-2">
					<p>Below is the <strong>real</strong> api response from <a href="https://iextrading.com/developer/docs/#quote" target="_blank" rel="noopener noreferrer">iextrading.com</a>. Only for display testing purpose.</p>
					<div className="text-black-50">
						<div className="row">
							<div className="col-sm-2">Company</div>
							<div className="col-sm-10">{selectedShareRealApi.companyName}</div>
						</div>
						<div className="row">
							<div className="col-sm-2">Symbol</div>
							<div className="col-sm-10">{selectedShareRealApi.symbol}</div>
						</div>
						<div className="row">
							<div className="col-sm-2">Exchange</div>
							<div className="col-sm-10">{selectedShareRealApi.primaryExchange}</div>
						</div>
						<div className="row">
							<div className="col-sm-2">Close at</div>
							<div className="col-sm-10">{selectedShareRealApi.close}</div>
						</div>
						<div className="row">
							<div className="col-sm-2">Change</div>
							<div className="col-sm-10">{selectedShareRealApi.change}</div>
						</div>
						<div className="row">
							<div className="col-sm-2">Change Percent</div>
							<div className="col-sm-10">{formatPercentage(selectedShareRealApi.changePercent)}</div>
						</div>
					</div>
				</div>
			</div>
		);
	}

	renderBuyForm() {
		const { selectedShare } = this.props;
		return(
			<div className="col-md-6">
				<form onSubmit={this.handleBuySubmit} className="py-2">
					<div className="row">
						<div className="col-md-10">
							<p>Amount: <span className="font-weight-bold">shares</span></p>
							<div className="input-group mb-2">
				        <input type="text" className="form-control" placeholder="10" value={this.state.buyValue} onChange={this.handleBuyChange} />
				        <div className="input-group-append">
	    						<span className="input-group-text font-weight-bold pointer" onClick={this.handleBuyIncrease}>&#43;</span>
	    					</div>
	    					<div className="input-group-append">
	    						<span className="input-group-text font-weight-bold pointer" onClick={this.handleBuyDecrease}>&#8722;</span>
	    					</div>
				      </div>
				      <div className="form-group">
				      	<span className="font-weight-light">Value: </span>
				      	<label className="form-check-label font-weight-bold">
				      		{ Object.keys(selectedShare).length > 0
				      			? `${this.state.buyValue} x $${formatNumber(selectedShare.rate)} = $${ formatNumber(this.state.buyValue * Number(selectedShare.rate)) }`
				      			: ''
				      		}
      					</label>
				      </div>
				      <button type="submit" className="btn bg-primary my-2 text-light w-50 text-uppercase">Buy</button>

				      { this.state.errorOfCredit
				      	? <p className="text-danger">You do not have enough credits. <Link to="/deposit">Deposit</Link></p>
				      	: ''
				      }
				     </div>
		      </div>
				</form>
			</div>
		);
	}

	renderSellForm() {
		const { selectedShare } = this.props;
		return(
			<div className="col-md-6">
				<form onSubmit={this.handleSellSubmit} className="py-2">
					<div className="row">
						<div className="col-md-10">
							<p>Amount: <span className="font-weight-bold">shares</span></p>
							<div className="input-group mb-2">
				        <input type="text" className="form-control" placeholder="10" value={this.state.sellValue} onChange={this.handleSellChange} />
				        <div className="input-group-append">
	    						<span className="input-group-text font-weight-bold pointer" onClick={this.handleSellIncrease}>&#43;</span>
	    					</div>
	    					<div className="input-group-append">
	    						<span className="input-group-text font-weight-bold pointer" onClick={this.handleSellDecrease}>&#8722;</span>
	    					</div>
				      </div>
				      <div className="form-group">
				      	<span className="font-weight-light">Value: </span>
				      	<label className="form-check-label font-weight-bold">
				      		{ Object.keys(selectedShare).length > 0
				      			? `${this.state.sellValue} x $${formatNumber(selectedShare.rate)} = $${ formatNumber(this.state.sellValue * Number(selectedShare.rate)) }`
				      			: ''
				      		}
      					</label>
				      </div>
				      <button type="submit" className="btn bg-info my-2 float-right text-light w-50 text-uppercase">Sell</button>
				      <div className="clearfix"></div>

				      { this.state.errorOfEquity
				      	? <p className="text-danger">Not have enough equity to sell. <strong>Buy</strong> some first</p>
				      	: ''
				      }
				     </div>
		      </div>
				</form>
			</div>
		);
	}

	render() {
		const { selectedShare } = this.props;

		return(
			<div>
				{this.renderBreadcrumb()}
				{ Object.keys(selectedShare).length > 0 ? this.renderShareContent() : '' }

				<div className="row py-4">
					{this.renderBuyForm()}
					{this.renderSellForm()}
				</div>

				{this.renderRealApiContent()}
			</div>
		);
	}
}

function mapStateToProps(state) {
	return {
		balance: state.balance,
		selectedShare: state.selectedShare,
		selectedShareRealApi: state.selectedShareRealApi
	}
}

export default connect(
	mapStateToProps,
	{ addCredits, withdrawCredits, increaseEquity, decreaseEquity, fetchShareBySymbol, addOrder, realApiFetchShareBySymbol }
)(Share);
