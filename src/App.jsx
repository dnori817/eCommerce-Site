import "./App.scss";
import React from "react";
import PRODUCTS from "json/products.json";

class App extends React.Component {
	render() {
		return (
			<div className="App">
				{PRODUCTS.map((product) => {
					return <h1>{product.name}</h1>;
				})}
				{/* <pre>{JSON.stringify(PRODUCTS, null, 2)}</pre> */}
			</div>
		);
	}
}

export default App;
