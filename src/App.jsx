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
	render() {
		return (
			<BrowserRouter>
				<div>
					<Navigation/>
					<Switch>
						<Route exact path="/" component={Home}/>
						<Route exact path="/All" component={All}/>
						<Route exact path="/Cart" component={Cart}/>
						<Route exact path="/Detail/:productId" 			render={(props) => {
							return <Detail productId= {props.match.params.productId} />;
						}}
						/>
					</Switch>
				</div>
			</BrowserRouter>

		);
	}
}

export default App;
