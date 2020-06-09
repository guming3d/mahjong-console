/* istanbul ignore file */
import React from "react";
import ReactDOM from "react-dom";
import "./index.scss";
import AppSelector from "./AppSelector";
// import TestApp from "./features/json/TestApp.txt";
import * as serviceWorker from "./serviceWorker";
// import {TabsExample} from "./example/tabsExample";
import "es6-shim";
import "reflect-metadata";
import Routes from "./Router"

ReactDOM.render(<Routes />, document.getElementById("root"));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
