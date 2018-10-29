import React from 'react';
import { connect } from 'react-redux';
import { searchShare } from '../../actions';

class SearchShare extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			value: ''
		}
	}

	handleChange = (e) => {
		this.setState({
			value: e.target.value
		});
		this.props.searchShare(e.target.value);
	}

	render() {
		return(
			<input type="text" className="form-control" placeholder="Search via symbol, i.e. FB" value={this.state.value} onChange={this.handleChange} />
		);
	}
}

export default connect(
	null, 
	{ searchShare }
)(SearchShare);