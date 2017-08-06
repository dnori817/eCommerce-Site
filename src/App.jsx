import "./App.scss";
import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import PRODUCTS from "json/products.json";
import Home from "pages/Home";
import All from "pages/All";
import Category1 from "pages/Category1";



class App extends React.Component {
	render() {
		return (
			<BrowserRouter>
				<Switch>
					<Route exact path="/" component={Home}/>
					<Route exact path="/All" component={All}/>
					<Route exact path="/Category1" component={Category1}/>
				</Switch>
			</BrowserRouter>

		);
	}
}

export default App;
