import React from "react";
import { StoreWithActions } from "../store/types";
import Layout from "../components/Layout";
import UserInfo from "./../components/UserInfo";

const UserDetails = () => {
  return (
    <Layout>
      <UserInfo />
    </Layout>
  );
};

export const loader = async (store: StoreWithActions) => {};
export default UserDetails;
