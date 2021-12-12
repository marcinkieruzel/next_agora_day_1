import ReactDOMServer from "react-dom/server.js";
import fs from "fs";
import Comp from "./component.js";
import React from 'react';

// const html = ReactDOMServer.renderToString(React.createElement(Comp, null));
// const html = ReactDOMServer.renderToString(<Comp />);

console.log(Comp)

const site = `<html><head></head>
<body>
<div id="app">${html}</div>
<script src="./public/bundle.js"></script>
</body>
</html>`;

fs.promises.writeFile("./index.html", site);
