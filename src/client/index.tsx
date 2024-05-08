import React from "react";
import { createRoot } from "react-dom/client";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import getRoutes from "./routes";

import { createStore, applyMiddleware } from "redux";
import { thunk } from "redux-thunk";
import { Provider } from "react-redux";
import reducers from "./store";

declare global {
  interface Window {
    __PRELOADED_STATE__: any;
  }
}

const store = createStore(
  reducers,
  window.__PRELOADED_STATE__,
  applyMiddleware(thunk)
);
delete window.__PRELOADED_STATE__;

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
