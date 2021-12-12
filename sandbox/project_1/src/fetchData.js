import React, { useState, useEffect, useRef, Fragment } from "react";
import ReactDOM from "react-dom";

const api = `https://api.kanye.rest/`;

const App = () => {
  const [message, setMessage] = useState("");

  useEffect(() => {
    (async () => {
      try {
        const data = await fetch(api);
        const json = await data.json();
        setMessage(json.quote);
      } catch (error) {
        setMessage("Kanye dzisiaj nic nie powie");
      }
    })();
  }, []);

  return <h1>{message}</h1>;
};

ReactDOM.render(<App />, document.querySelector("#app"));
