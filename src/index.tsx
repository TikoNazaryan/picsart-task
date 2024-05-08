import React from "react";
import express from "express";
import { renderToString } from "react-dom/server";

import {
  createStaticHandler,
  createStaticRouter,
  StaticHandlerContext,
  StaticRouterProvider,
} from "react-router-dom/server";
import createFetchRequest from "./helpers/request";
import getRoutes from "./client/routes";

import { Provider } from "react-redux";
import createStore from "./helpers/createStore";

const app = express();

app.use(express.static("public"));

app.get("*", async (req, res) => {
  const store = createStore();

  const handler = createStaticHandler(getRoutes(store));
  const fetchRequest = createFetchRequest(req, res);
  const context = (await handler.query(fetchRequest)) as StaticHandlerContext;
  const router = createStaticRouter(handler.dataRoutes, context);

  const html = renderToString(
    <Provider store={store}>
      <StaticRouterProvider router={router} context={context} />
    </Provider>
  );

  res.send("<!DOCTYPE html>" + html);
});

app.listen(3000, () => {
  console.log("Listening on port 3000");
});
