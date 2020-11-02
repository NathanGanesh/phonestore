import React, { Component } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

export default class SingleProduct extends Component {
	render() {
		const { id, title, img, price, inCart } = this.props.product;
		return (
			<SingleProductWrapper>
				<div className="main-product">
					<Link to="/details">
						<img src={process.env.PUBLIC_URL + img} alt="product" />
					</Link>
					<div className="under-bar">
						<h3>{title}</h3>
						<h3>{price}</h3>
					</div>
				</div>
			</SingleProductWrapper>
		);
	}
}

const SingleProductWrapper = styled.div`
	.main-product {
		background: grey;
		margin: 20px;
	}

	.under-bar {
		display: flex;
		flex-direction: row;
		justify-content: space-evenly;
	}
`;
