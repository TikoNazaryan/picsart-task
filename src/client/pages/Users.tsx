import React from "react";
import { StoreWithActions } from "../store/types";
import Layout from "../components/Layout";

const Users = () => {
  return (
    <Layout>
      <div>
        <div>Users</div>
      </div>
    </Layout>
  );
};

export const loader = async (store: StoreWithActions) => {};
export default Users;
