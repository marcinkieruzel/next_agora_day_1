import React, { useState, useEffect, useRef, Fragment } from "react";
import ReactDOM from "react-dom";

const Child = ({ children, name }) => {
  return (
    <h1>
      I'm a beloved {name}
      {children}
    </h1>
  );
};

const Parent = ({ children }) => {
  return <section>{children}</section>;
};

ReactDOM.render(
  <>
    <Parent>
      <Child name={"Maciuś"}>
        <Child name="Antoni" />
      </Child>
      <Child name={"Agatke"} />
      <Child name={"Wojtuś"} />
    </Parent>
    {/* <Parent />
    <Parent />
    <Parent />
    <Parent />
    <Parent />
    <Parent />
    <Parent />
    <Parent /> */}
  </>,
  document.querySelector("#app")
);
