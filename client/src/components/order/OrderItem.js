import React from 'react';
import { formatNumber } from '../../utils';

const OrderItem = (props) => {
	const { symbol, name, rate } = props.order.share;
	const { type, shares, amount, createdAt } = props.order;

	return(
		<tr>
			<td>{name}</td>
			<td>{symbol}</td>
			<td className="font-weight-light">{formatNumber(rate)}</td>
			<td>{type}</td>
			<td>{shares}</td>
			<td>{formatNumber(amount)}</td>
			<td>{createdAt}</td>
		</tr>
	
	);
}

export default OrderItem;
