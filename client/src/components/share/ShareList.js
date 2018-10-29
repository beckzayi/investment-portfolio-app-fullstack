import React from 'react';
import { connect } from 'react-redux';
import ShareItem from './ShareItem';
import SearchShare from './SearchShare';
import { fetchShares } from '../../actions';

class ShareList extends React.Component {
	componentDidMount() {
		this.props.fetchShares();
	}

	renderContent() {
		const { shares } = this.props;

		if (!shares) {
			return(
				<div className="py-2">Sorry, no share information.</div>
			);
		}

		return(
			<div className="py-2">
				<table className="table table-hover">
					<thead>
						<tr>
							<th scope="col">Instrument</th>
							<th scope="col">Symbol</th>
							<th scope="col">Rate</th>
							<th scope="col">Favorite</th>
							<th scope="col">Action</th>
						</tr>
					</thead>
					<tbody>
						{shares.map(share => <ShareItem share={share} key={share.symbol} />)}
					</tbody>
				</table>
			</div>
		);
	}

	renderBreadcrumb() {
		return(
			<nav aria-label="breadcrumb">
			  <ol className="breadcrumb mb-0 bg-transparent">
			    <li className="breadcrumb-item active" aria-current="page">Home</li>
			  </ol>
			</nav>
		);
	}

	render() {
		return(
			<div>
				<div className="row py-2">
					<div className="col-md-6">
						{this.renderBreadcrumb()}
					</div>
					<div className="col-md-6">
						<SearchShare />
					</div>
				</div>
				{this.renderContent()}
			</div>
		);
	}
}

function mapStateToProps(state) {
	return {
		shares: state.shares
	}
}

export default connect(
	mapStateToProps,
	{ fetchShares }
)(ShareList);