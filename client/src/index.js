// import node_modules for React
import React from "react";
import ReactDOM from "react-dom";
//import node_modules for React-Redux
// import { Provider } from "react-redux";
// import { createStore, applyMiddleware } from "redux";
//import components
import App from "./components/App";
//import css
import "./css/styles.css";
import "./css/gridLayout.css";
// create the redux store
// const store = createStore(() => [], {}, applyMiddleware);

ReactDOM.render(<App />, document.getElementById("root"));
