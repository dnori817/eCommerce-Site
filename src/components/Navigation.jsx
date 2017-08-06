import React, { Component } from "react";
import PRODUCTS from "json/products.json";
import { Link } from "react-router-dom";

class Navigation extends Component {
	render() {
		const links = [{
			to: "/",
			text: "Home",
		}, {
			to: "/All",
			text: "All Items",
		}];
		return (
			<nav className="navbar">
				{links.map((link) => {
					return <Link key={link.to} to={link.to}>{link.text}</Link>;
				})}
			</nav>

		);
	}
}

export default Navigation;
