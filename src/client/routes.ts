import React from "react";
import Home, { loader as homeLoader } from "./pages/Home";
import Users, { loader as usersLoader } from "./pages/Users";
import { StoreWithActions } from "./store/types";

const getRoutes = (store: StoreWithActions) => {
  return [
    {
      path: "/",
      loader: async () => {
        await homeLoader(store);
        return null;
      },
      Component: Home,
    },
    {
      path: "/users",
      loader: async () => {
        await usersLoader(store);
        return null;
      },
      Component: Users,
    },
  ];
};

export default getRoutes;
