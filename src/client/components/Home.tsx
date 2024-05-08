import React from "react";
import { useSelector } from "react-redux";
import { fetchTasks } from "./../store/tasks/actions";
import { selectTasks } from "../store/tasks/selectors";
import { StoreWithActions } from "../store/types";

const Home = () => {
  const { data: tasks } = useSelector(selectTasks);

  if (!tasks) return <>Loading...</>;

  return (
    <div>
      <div>Tasks</div>
      <ul>
        {tasks.map((task) => {
          return <li>{task.title}</li>;
        })}
      </ul>
    </div>
  );
};

export const loader = async (store: StoreWithActions) => {
  // @ts-ignore
  await store.dispatch(fetchTasks());
};

export default Home;
