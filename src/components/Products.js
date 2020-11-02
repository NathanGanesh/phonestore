import React from 'react';
import styled from 'styled-components';
import { ProductConsumer } from '../context/Context';
import SingleProductItem from './SingleProduct';

export default function Products() {
	return (
		<ProductWrapper>
			<ProductConsumer>
				{(value) => {
					const { products } = value;
					// console.log(value);
					return (
						<div className="featured-flex">
							{products.map((item) => {
								return <SingleProductItem key={item.id} product={item} />;
							})}
							<h2>hey</h2>
						</div>
					);
				}}
			</ProductConsumer>
		</ProductWrapper>
	);
}

const ProductWrapper = styled.div`
	.featured-flex {
		display: grid;
		grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
		justify-content: center;
		text-align: center;
		margin: 10px;
		margin: auto;
		background: white;
	}
`;
