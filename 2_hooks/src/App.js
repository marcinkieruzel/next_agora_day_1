import React, { useReducer } from "react";
import Article from "./article.js";
import Header from "./header";

const theme = `
--app-color: black;
--app-bgr-color: white;
`;

const initialState = {
  theme: theme,
  font: "Arial",
  fontSize: 16,
};

export const StyledContext = React.createContext({
  dispatch: () => null,
  state: initialState,
});

const App = () => {
  const [state, dispatch] = useReducer((state, action) => {
    console.log("USEREDUCER", action, state);

    if (action.type === "CHANGE_FONT_SIZE") {
      return { ...state, fontSize: action.payload };
    }

    if (action.type === "CHANGE_FONT_FAMILY") {
      return { ...state, font: action.payload };
    }

    return state;
  }, initialState);

  return (
    <StyledContext.Provider value={{ state, dispatch }}>
      <Header />
      <Article />
    </StyledContext.Provider>
  );
};

export default App;
