import React from "react";
import ReactDOM from "react-dom";
import html from '../data.json';

console.log(html);

const App = () => {
  return React.createElement(
    "div",
    {
      className: "anyclass",
    },
    html.html.map((x) => {
        return React.createElement(x.tag, {}, x.content)
    })
  );
};

ReactDOM.render(new App(), document.querySelector("#app"));
