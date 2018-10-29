import React from 'react';
import { Link } from 'react-router-dom';
import './sidebar.css';
import logo from '../logo.svg';

class Sidebar extends React.Component {
	render() {
		return(
			<nav className="d-md-block sidebar">
				<div className="text-center">
				<Link to="/">
					<img src={logo} className="logo" alt="logo" />
        </Link>
        </div>

				<div className="sidebar-sticky">
					<ul className="nav flex-column">
						<li className="nav-item">
							<Link to="/" className="nav-link">Popular Shares</Link>
						</li>
						<li className="nav-item">
							<Link to='/deposit' className="nav-link">Deposit</Link>
						</li>
						<li className="nav-item">
							<Link to='/withdraw' className="nav-link">Withdraw</Link>
						</li>
						<li className="nav-item">
							<Link to='/orders' className="nav-link">Order History</Link>
						</li>
						<li className="nav-item">
							<Link to='/favorites' className="nav-link">My Favorites</Link>
						</li>
					</ul>
				</div>
      </nav>
		);
	}
}

export default Sidebar;
