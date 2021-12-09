import React, { useState, useEffect, useRef } from "react";
import ReactDOM from "react-dom";
import Property from "./Property.js";

const App = () => {
  const [properties, setProperties] = useState([]);

  return (
    <div className="container">
      <ul className="nav">
        <li className="nav-item">
          <a className="nav-link active">Property type</a>
        </li>
      </ul>
      <div className={"row"}>{properties.map((property) => {})}</div>
    </div>
  );
};

ReactDOM.render(<App />, document.querySelector("#app"));
