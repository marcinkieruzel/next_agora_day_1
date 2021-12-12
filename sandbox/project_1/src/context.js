import React, { useState, useEffect, useContext } from "react";
import ReactDOM from "react-dom";

export const AgoraContext = React.createContext({
  color: "blue",
  setColor: () => "blue",
});

//parent.js import { AgoraContext } from '../'
const Parent = ({ children }) => {
  const context = useContext(AgoraContext);
  return (
    <div>
      <div
        style={{
          width: "100px",
          height: "100px",
          background: context.color,
        }}
      ></div>
      {children}
    </div>
  );
};

const Child = () => {
  const context = useContext(AgoraContext);
  return (
    <div>
      <div
        style={{
          width: "200px",
          height: "200px",
          background: context.color,
        }}
      ></div>
      <button
        onClick={() => {
          context.setColor("red");
        }}
      >
        Zmień kolor
      </button>

      {context.mozaic.map((x, i) => {
        switch (x) {
          case "sekcja":
            return <article>SEKCJA</article>;

          case "szpalta":
            return <aside>Szpalta</aside>;
        }
      })}

      <button
        onClick={() => {
          context.setMozaic([
            "szpalta",
            "sekcja",
            "szpalta",
            "sekcja",
            "sekcja",
          ]);
        }}
      >
        Zmień układ na szpalta, sekcja, szpalta, sekcja, sekcja
      </button>
    </div>
  );
};

const App = () => {
  const [color, setColor] = useState("blue");
  const [mozaic, setMozaic] = useState(["sekcja", "sekcja", "szpalta"]);

  return (
    <AgoraContext.Provider value={{ color, setColor, mozaic, setMozaic }}>
      <Parent>
        <Child />
      </Parent>
    </AgoraContext.Provider>
  );
};

ReactDOM.render(<App />, document.querySelector("#app"));
