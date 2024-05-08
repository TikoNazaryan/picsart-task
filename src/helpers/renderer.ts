import React, { ReactNode } from "react";
import { renderToString } from "react-dom/server";
import { Provider } from "react-redux";

export default (JSXElement: ReactNode) => {
  const content = renderToString(JSXElement);

  const html = `
    <!DOCTYPE html>
    <html>
        <head>
            <title>Picsart test task</title>
        </head>
        <body>
            <div id="root">${content}</div>
            <script src="bundle.js"></script>
        </body>
    </html>
  `;

  return html;
};
