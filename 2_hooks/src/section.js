import React from "react";
// import { StyledContext } from "./App.js";

const Section = ({ content }) => {
    //   const context = useContext(StyledContext);
  return (
    <section style={{
        backgroundColor: `var(--app-bgr-color)`,
        color: `var(--app-color)`
    }}>
      <h1 style={{
          fontSize: `1.6rem`
      }}>{content.headline}</h1>
      <p style={{
          fontSize: `1rem`
      }}>{content.text}</p>
    </section>
  );
};

export default Section;
