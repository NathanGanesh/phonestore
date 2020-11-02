import React, { Component } from 'react';
import logo from '../context/logo.svg';
import { ButtonContainer } from './ButtonContainer';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
export default function NavBar() {
	return (
		<Nav>
			<nav className="nav-bar">
				<div className="inner-nav-bar">
					<Link to="/">
						<img src={process.env.PUBLIC_URL + '/img/logo.svg'} alt="logo" />
					</Link>
					<li>products</li>
				</div>
				<div className="inner-nav-bar">
					<Link to="/cart">
						<img
							style={{ height: '40px' }}
							src={process.env.PUBLIC_URL + '/img/shopping-cart.svg'}
							alt="logo"
						/>
					</Link>
					<li>store</li>
				</div>
			</nav>
		</Nav>
	);
}

const Nav = styled.nav`
	.inner-nav-bar {
		display: flex;
	}

	.nav-bar {
		display: flex;
		background: purple;
		justify-content: space-between;
		flex-direction: row;
		padding: 20px;
		padding-left: 100px;
		padding-right: 100px;
	}

	.nav-bar li {
		padding-left: 25px;
		list-style-type: none;
		color: white;
	}
`;
