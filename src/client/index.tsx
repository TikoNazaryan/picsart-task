import React from "react";
import { createRoot } from "react-dom/client";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import getRoutes from "./routes";

import { createStore, applyMiddleware } from "redux";
import { thunk } from "redux-thunk";
import { Provider } from "react-redux";
import reducers from "./store";

const store = createStore(reducers, {}, applyMiddleware(thunk));
const rootNode = document.getElementById("root");

if (rootNode) {
  const root = createRoot(rootNode);
  const router = createBrowserRouter(getRoutes(store));

  root.render(
    <React.StrictMode>
      <Provider store={store}>
        <RouterProvider router={router} />
      </Provider>
    </React.StrictMode>
  );
}
