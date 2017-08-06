import "./App.scss";
import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Navigation from "components/Navigation";
import PRODUCTS from "json/products.json";
import Home from "pages/Home";
import All from "pages/All";
import Category1 from "pages/Category1";



class App extends React.Component {
	render() {
		return (
			<BrowserRouter>
				<div>
					<Navigation/>
					<Switch>
						<Route exact path="/" component={Home}/>
						<Route exact path="/All" component={All}/>
						<Route exact path="/Category1" component={Category1}/>
					</Switch>
				</div>
			</BrowserRouter>

		);
	}
}

export default App;
