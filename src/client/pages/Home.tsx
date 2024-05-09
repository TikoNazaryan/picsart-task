import React from "react";
import { fetchTasks } from "./../store/tasks/actions";
import { StoreWithActions } from "../store/types";
import Layout from "../components/Layout";
import Welcome from "../components/Welcome";
import Tasks from "../components/Tasks";

const Home = () => {
  return (
    <Layout>
      <Welcome />
      <Tasks />
    </Layout>
  );
};

export const loader = async (store: StoreWithActions) => {
  await store.dispatch(fetchTasks());
};

export default Home;
