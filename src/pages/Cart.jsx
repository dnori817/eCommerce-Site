import React, { Component } from "react";
import PRODUCTS from "json/products.json";
import { Link } from "react-router-dom";


class Cart extends Component {
	render() {
		return (
			<div>
				<h1>Your Cart is Empty</h1>;
			</div>
		);
	}
}

export default Cart;
