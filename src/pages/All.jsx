import React, { Component } from "react";
import PRODUCTS from "json/products.json";

class All extends Component {
	render() {
		return (
			<div>
				<h1>All Items</h1>
				<div className="All">
					{PRODUCTS.map((product) => {
						return (
							<div>
								<img src={product.images[0].medium}/>
		 					</div>
						);
					})}
				</div>
			</div>
		);
	}
}

export default All;
