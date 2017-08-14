import "./App.scss";
import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Navigation from "components/Navigation";
import PRODUCTS from "json/products.json";
import Home from "pages/Home";
import All from "pages/All";
import Detail from "pages/Detail";
import Cart from "pages/Cart";



class App extends React.Component {
	state = {
		products: PRODUCTS,
		cart: [],
	}

	_getProduct = (productId) => {
		return this.state.products.reduce((prev, product) => {
			return product.id === productId ? product : prev;
		});
	}
	_addToCart = (productId) => {
		const { cart, products } = this.state;
		this.setState({
			cart: [
				...cart,
				this._getProduct(productId),
			],
			// cartTotal: cart.length + 1,
		});
		console.log(cart);
	}
	render() {
		const { products, cart } = this.state;
		return (
			<BrowserRouter>
				<div>
					<Navigation/>
					<Switch>
						<Route exact path="/" component={Home}/>
						<Route exact path="/All" component={All}/>
						<Route exact path="/Cart" render = {(props) => {
							return (
								<Cart cart = {cart}/>
							);
						}}/>
						<Route exact path="/Detail/:productId" render={(props) => {
							return (
								<Detail
									product= {this._getProduct(props.match.params.productId)}
									addToCart = {this._addToCart}
								/>);
						}}
						/>
					</Switch>
				</div>
			</BrowserRouter>

		);
	}
}

export default App;
