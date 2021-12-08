import React from "react";

const App = () => {
  const getData = () => {
    console.log("Działa");
  };

  return /*#__PURE__*/ React.createElement(
    "div",
    null,
    /*#__PURE__*/ React.createElement(
      "button",
      {
        onClick: () => {
          getData();
        },
      },
      "Click"
    ),
    /*#__PURE__*/ React.createElement("div", null, 'adsasd')
  );
};

export default App