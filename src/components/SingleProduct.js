import React, { Component } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { ProductConsumer } from '../context/Context';

export default class SingleProduct extends Component {
	render() {
		const { id, title, img, price, inCart } = this.props.product;
		return (
			<SingleProductWrapper>
				<ProductConsumer>
					{(value) => {
						return (
							<div className="main-product">
								<Link to="/details">
									<img
										src={process.env.PUBLIC_URL + img}
										alt="product"
										onClick={() => value.handleDetail(id)}
									/>
									<button
										style={{ width: '100px', height: '100px' }}
										className="cart-btn"
										disabled={inCart ? true : false}
										onClick={() => {
											value.addToCart(id);
											value.openModal(id);
										}}
									/>
								</Link>
								<div className="under-bar">
									<h3>{title}</h3>
									<h3>{price}</h3>
								</div>
							</div>
						);
					}}
				</ProductConsumer>
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

	.main-product:hover {
		transform: scale(1.2);
	}

	.cart-btn:hover {
		color: blue;
		cursor: pointer;
	}
`;
