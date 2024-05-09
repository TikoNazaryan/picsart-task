import React from "react";
import { Wrapper, Title, List } from "./styles";
import Task from "../Task";
import { useSelector } from "react-redux";
import { selectTasks } from "../../store/tasks/selectors";
import TaskForm from "../TaskForm";

interface ITasks {}

const Tasks: React.FC<ITasks> = () => {
  const { data: tasks, error } = useSelector(selectTasks);

  if (!tasks) return <>Loading...</>;
  if (error) return <>{error}</>;

  return (
    <Wrapper>
      <Title>Your task list</Title>
      <TaskForm />
      <List>
        {tasks.map((task) => (
          <Task key={task.id} {...task} />
        ))}
      </List>
    </Wrapper>
  );
};

export default Tasks;
