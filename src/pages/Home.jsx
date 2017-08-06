import React, {Component} from "react";
import PRODUCTS from "json/products.json";

class Home extends Component {
	render() {
		return (
			<div>
				<h1>Home</h1>
				<div className="Home">
					{PRODUCTS.map((product) => {
						return (
							<div>
								<img src={product.images[0].small}/>
								<img src={product.images[1].large}/>
								<img src={product.images[2].small}/>
								<img src={product.images[0].medium}/>
								<img src={product.images[2].large}/>
								<img src={product.images[1].small}/>
								<img src={product.images[1].medium}/>
								<img src={product.images[2].medium}/>
								<img src={product.images[0].large}/>
							</div>
						);
					})}
					{/* <pre>{JSON.stringify(PRODUCTS, null, 2)}</pre> */}
				</div>
			</div>
		);
	}
}

export default Home;
