import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import Home from "./home/Home";

const App = () => {
	return (
		//BrowserRouter can only accept one child
		<BrowserRouter>
			<div className="fullHeight">
				<Route path="/" component={Home} />
			</div>
		</BrowserRouter>
	);
};

export default App;
