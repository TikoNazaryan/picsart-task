import React from "react";
import { useSelector } from "react-redux";
import { fetchTasks } from "./../store/tasks/actions";
import { selectTasks } from "../store/tasks/selectors";
import { StoreWithActions } from "../store/types";
import Layout from "../components/Layout";

const Home = () => {
  const { data: tasks } = useSelector(selectTasks);

  if (!tasks) return <div>Loading...</div>;

  const handleClick = () => {
    console.log(tasks);
  };

  return (
    <Layout>
      <div>
        <div>Tasks</div>
        <button onClick={handleClick}>Click me</button>
        <ul>
          {tasks.slice(0, 5).map((task) => {
            return <li key={task.id}>{task.title}</li>;
          })}
        </ul>
      </div>
    </Layout>
  );
};

export const loader = async (store: StoreWithActions) => {
  await store.dispatch(fetchTasks());
};

export default Home;
