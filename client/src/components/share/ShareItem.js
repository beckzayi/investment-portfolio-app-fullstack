import React from 'react';
import { Link } from 'react-router-dom';
import { formatNumber } from '../../utils';

const ShareItem = (props) => {
	const { symbol, name, rate, favorite } = props.share;

	return(
		<tr>
			<td>{name}</td>
			<td>{symbol}</td>
			<td className="font-weight-light">{formatNumber(rate)}</td>
			<td>{favorite}</td>
			<td>
				<Link to={`/share/${symbol}`}>
					<button type="button" className="btn btn-outline-primary btn-sm mr-2">Buy</button>
				</Link>
				<Link to={`/share/${symbol}`}>
					<button type="button" className="btn btn-outline-info btn-sm">Sell</button>
				</Link>
			</td>
		</tr>
	
	);
}

export default ShareItem;