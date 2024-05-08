import React, { ReactNode } from "react";
import { renderToString } from "react-dom/server";
import { IGlobalState } from "../client/store/types";

export default (JSXElement: ReactNode, preloadedState: IGlobalState) => {
  const content = renderToString(JSXElement);

  const html = `
    <!DOCTYPE html>
    <html>
        <head>
            <title>Picsart test task</title>
            <link rel="stylesheet" href="global.css">
        </head>
        <body>
            <div id="root">${content}</div>
            <script>
              // WARNING: See the following for security issues around embedding JSON in HTML:
              // https://redux.js.org/usage/server-rendering#security-considerations
              window.__PRELOADED_STATE__ = ${JSON.stringify(
                preloadedState
              ).replace(/</g, "\\u003c")}
            </script>
            <script src="bundle.js"></script>
        </body>
    </html>
  `;

  return html;
};
