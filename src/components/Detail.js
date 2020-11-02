import React, { Component } from 'react';
import { ProductConsumer } from '../context/Context';
import styled from 'styled-components';
import { ButtonContainer } from './ButtonContainer';
import { Link } from 'react-router-dom';
export default class Detail extends Component {
	render() {
		return (
			<DetailProductWrapper>
				<ProductConsumer>
					{(value) => {
						const { id, company, img, info, price, title, inCart } = value.detailProduct;
						return (
							<div>
								<h1 style={{ textAlign: 'center' }}>{title}</h1>
								<div className="flex-box">
									<div className="modelOne">
										<h2>model : {title}</h2>
										<h3>made by: {company}</h3>
										<h3>price: {price}</h3>
										<h5>some info about product: </h5>
										<p>{info}</p>
									</div>
									<div>
										<img src={img} alt="" />
									</div>
								</div>
								<div className="buttons">
									<Link to="/">
										<button style={{ width: '100px', height: '100px' }} className="btn" />
									</Link>

									<button
										style={{ width: '100px', height: '100px' }}
										className="btn"
										onClick={() => {
											value.addToCart(id);
										}}
									/>
								</div>
							</div>
						);
					}}
				</ProductConsumer>
			</DetailProductWrapper>
		);
	}
}

const DetailProductWrapper = styled.div`
	.flex-box {
		display: flex;
		flex-direction: row-reverse;
		justify-content: center;
	}
	.modelOne {
		padding-left: 100px;
		width: 350px;
	}
	.buttons {
		display: flex;
		justify-content: flex-end;
		padding-right: 250px;
	}
`;
