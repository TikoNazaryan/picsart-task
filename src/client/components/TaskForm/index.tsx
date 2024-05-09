import React, { useState } from "react";
import { AddButton, TitleInput, Wrapper } from "./styles";
import { useDispatch } from "react-redux";
import { addTask, deleteTask } from "../../store/tasks/actions";
import { AppDispatch } from "../../store/types";

interface ITaskForm {}

const TaskForm: React.FC<ITaskForm> = () => {
  const [title, setTitle] = useState("");
  const dispatch: AppDispatch = useDispatch();

  const onSubmitClick = () => {
    dispatch(addTask(title));
    setTitle("");
  };

  const onTitleChange = (e: React.FormEvent<HTMLInputElement>) => {
    setTitle(e.currentTarget.value);
  };

  return (
    <Wrapper>
      <TitleInput
        placeholder="Type..."
        type="text"
        value={title}
        onChange={onTitleChange}
      />
      <AddButton disabled={!title} onClick={onSubmitClick}>
        Add new task
      </AddButton>
    </Wrapper>
  );
};

export default TaskForm;
