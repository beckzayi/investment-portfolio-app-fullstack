import React from 'react';
import { Link } from 'react-router-dom';

class FavoriteList extends React.Component {
	renderBreadcrumb() {
		return(
			<nav aria-label="breadcrumb">
			  <ol className="breadcrumb mb-0 bg-transparent">
			    <li className="breadcrumb-item"><Link to="/">Home</Link></li>
			    <li className="breadcrumb-item active" aria-current="page">My Favorite</li>
			  </ol>
			</nav>
		);
	}

	render() {
		return(
			<div>
				{this.renderBreadcrumb()}
				<p className="py-4">This is the watch list. But sorry, not implemented yet.</p>

				<Link to="/">
					<button type="button" className="btn btn-secondary">Back to Home</button>
				</Link>
			</div>
		);
	}
}

export default FavoriteList;