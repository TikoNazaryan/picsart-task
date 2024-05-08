import React from "react";
import Home, { loader } from "./components/Home";
import { StoreWithActions } from "./store/types";

const getRoutes = (store: StoreWithActions) => {
  return [
    {
      path: "/",
      loader: async () => {
        await loader(store);
        return null;
      },
      Component: Home,
    },
  ];
};

export default getRoutes;
