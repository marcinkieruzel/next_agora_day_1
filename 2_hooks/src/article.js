import Section from "./section.js";
import data from "../data.json";
import React, { useContext } from "react";
import { StyledContext } from "./App.js";
import { Helmet } from "react-helmet";

const Article = () => {
  const context = useContext(StyledContext);

  console.log(context);

  return (
    <article>
      <Helmet>
        <style type="text/css">{`

        :root {
          ${context.state.theme}
        }

        html {
          font-size: ${context.state.fontSize}px
        }

        body {
            background-color: blue;
            font-family: ${context.state.font};
        }
 
        p {
            font-size: 12px;
        }
    `}</style>
        <title>asdasdasdasd</title>
      </Helmet>
      {data?.lorem?.map((x, i) => {
        return <Section content={x} key={i}></Section>;
      })}
    </article>
  );
};

export default Article;
