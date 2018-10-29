import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { withdrawCredits } from '../actions';

class Withdraw extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			value: 10
		};

		this.defaultAddedValue = 10;
	}

	handleSubmit = (e) => {
		e.preventDefault();

		if (this.state.value <= 0) {
			return;
		}

		const { withdrawCredits } = this.props;
		withdrawCredits(this.state.value);
	}

	handleChange = (e) => {
		if (e.target.value < 0) {
			return;
		}
		this.setState({ value: Number(e.target.value) });
	}

	handleIncrease = () => {
		this.setState({ value: this.state.value + this.defaultAddedValue });
	}

	handleDecrease = () => {
		if (this.state.value < this.defaultAddedValue) {
			return;
		}
		this.setState({ value: this.state.value - this.defaultAddedValue });
	}

	renderBalance() {
		const { credits } = this.props.balance;
		return(
			<div className="py-4">
				<div className="display-4">$ { credits }</div>
				<div className="pl-2 pt-2">Available credits for withdrawal.</div>
			</div>
		);
	}

	renderForm() {
		return(
			<form onSubmit={this.handleSubmit} className="py-2">
				<div className="row">
					<div className="col-md-6">
						<p className="font-weight-bold">Withdraw credits to your balance</p>
						<div className="input-group mb-2">
			        <div className="input-group-prepend">
			          <span className="input-group-text">$</span>
			        </div>
			        <input type="text" className="form-control" placeholder="10" value={this.state.value} onChange={this.handleChange} />
			        <div className="input-group-append">
    						<span className="input-group-text font-weight-bold pointer" onClick={this.handleIncrease}>&#43;</span>
    					</div>
    					<div className="input-group-append">
    						<span className="input-group-text font-weight-bold pointer" onClick={this.handleDecrease}>&#8722;</span>
    					</div>
			      </div>
			      <button type="submit" className="btn bg-dark my-2 float-right text-light w-50 text-uppercasse">Withdraw</button>
			     </div>
	      </div>
			</form>
		);
	}

	renderBreadcrumb() {
		return(
			<nav aria-label="breadcrumb">
			  <ol className="breadcrumb mb-0 bg-transparent">
			    <li className="breadcrumb-item"><Link to="/">Home</Link></li>
			    <li className="breadcrumb-item active" aria-current="page">Withdraw</li>
			  </ol>
			</nav>
		);
	}

	render() {
		return(
			<div className="p-2">
				{this.renderBreadcrumb()}
				{this.renderBalance()}
				<hr />
				{this.renderForm()}
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
	mapStateToProps,
	{ withdrawCredits }
)(Withdraw);
