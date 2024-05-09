import React from "react";
import { StoreWithActions } from "../store/types";
import Layout from "../components/Layout";
import UsersTable from "../components/UsersTable";

const Users = () => {
  return (
    <Layout>
      <UsersTable />
    </Layout>
  );
};

export const loader = async (store: StoreWithActions) => {};
export default Users;
