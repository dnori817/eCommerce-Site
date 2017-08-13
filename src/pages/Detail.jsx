import "./Detail.scss";
import React, { Component } from "react";
import PRODUCTS from "json/products.json";
import { Link } from "react-router-dom";

class Detail extends Component {
	render() {
		const { product } = this.props;
		return (
			<div>
				<h1>{product.name}</h1>
				<p>{product.description}</p>
			</div>
		);
	}
}

export default Detail;
