import React from "react";
import ReactDOM from "react-dom";
import Comp from "../component.js";

ReactDOM.hydrate(<Comp />, document.querySelector("#app"));
