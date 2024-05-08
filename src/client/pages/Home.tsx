import React from "react";
import { useSelector } from "react-redux";
import { fetchTasks } from "./../store/tasks/actions";
import { selectTasks } from "../store/tasks/selectors";
import { StoreWithActions } from "../store/types";
import Layout from "../components/Layout";
import Welcome from "../components/Welcome";

const Home = () => {
  return (
    <Layout>
      <Welcome />
    </Layout>
  );
};

export const loader = async (store: StoreWithActions) => {
  await store.dispatch(fetchTasks());
};

export default Home;
