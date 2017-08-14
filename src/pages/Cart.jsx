import React, { Component } from "react";
import PRODUCTS from "json/products.json";
import { Link } from "react-router-dom";
// import { cart } from "../App.jsx";


class Cart extends Component {
	constructor(props) {
		super(props);
		this.state = {};
	}
	render() {
		const { cart } = this.props;
		return (
			<div>
				{/* <h1 className="center">Your Cart is Empty</h1>; */}
				{cart.map((product) => {
					return (
						<span className="cart-row">
							<img className="" src={product.images[0].small}/>
							<h5 className="">{product.name}</h5>
							<h4 className="">${product.price}</h4>
						</span>
					);
				})}
			</div>
		);
	}
}

export default Cart;
