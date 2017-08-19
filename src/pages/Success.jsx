import "./Success.scss";
import React, { Component } from "react";
import PRODUCTS from "json/products.json";
import { Link } from "react-router-dom";

class Success extends Component {
	render() {
		return (
			<div className="row">
				<div className="col s1"/>
				<h1 className="col s10 center">YOUR ORDER HAS BEEN SHIPPED!</h1>
				<div className="col s1"/>

			</div>
		);
	}
}

export default Success;
