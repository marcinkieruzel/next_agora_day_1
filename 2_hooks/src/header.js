import React, { useContext } from "react";
import { StyledContext } from "./App.js";

const Header = () => {
  const context = useContext(StyledContext);
  return (
    <header>
      <ul>
        <li
          onClick={() => {
            context.dispatch({ type: "CHANGE_FONT_SIZE", payload: 16 });
          }}
        >
          16
        </li>
        <li
          onClick={() => {
            context.dispatch({ type: "CHANGE_FONT_SIZE", payload: 22 });
          }}
        >
          22
        </li>
        <li
          onClick={() => {
            context.dispatch({ type: "CHANGE_FONT_SIZE", payload: 28 });
          }}
        >
          28
        </li>
      </ul>

      <ul>
        <li
          onClick={() => {
            context.dispatch({ type: "CHANGE_FONT_FAMILY", payload: "Arial" });
          }}
        >
          Arial
        </li>
        <li
          onClick={() => {
            context.dispatch({
              type: "CHANGE_FONT_FAMILY",
              payload: "Times New Roman",
            });
          }}
        >
          Times
        </li>
        <li
          onClick={() => {
            context.dispatch({
              type: "CHANGE_FONT_FAMILY",
              payload: "Open Sans",
            });
          }}
        >
          Open Sans
        </li>
      </ul>
    </header>
  );
};

export default Header;
