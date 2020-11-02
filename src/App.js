import React, { Component } from 'react';
import './index.css';
import Home from './pages/Home';
import Error from './pages/Error';
import CartPage from './pages/CartPage';
import Details from './pages/Details';
import Navbar from './components/NavBar';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

export default class App extends Component {
	render() {
		return (
			<BrowserRouter>
				<Navbar />
				<Switch>
					<Route exact path="/" component={Home} />
					<Route exact path="/cart" component={CartPage} />
					<Route exact path="/details" component={Details} />
					<Route component={Error} />
				</Switch>
			</BrowserRouter>
		);
	}
}
