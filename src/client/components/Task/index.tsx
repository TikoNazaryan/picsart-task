import React from "react";
import { Wrapper, Divider, Item, Title, DeleteButton } from "./styles";
import { ITask } from "../../store/tasks/types";
import { useDispatch } from "react-redux";
import { deleteTask } from "../../store/tasks/actions";
import { AppDispatch } from "../../store/types";

interface ITaskElement extends ITask {}

const Task: React.FC<ITaskElement> = ({ title, id }) => {
  const dispatch: AppDispatch = useDispatch();

  const onDeleteClick = () => dispatch(deleteTask(id));

  return (
    <Wrapper>
      <Item>
        <Title>{title}</Title>
        <DeleteButton onClick={onDeleteClick}>Delete</DeleteButton>
      </Item>
      <Divider />
    </Wrapper>
  );
};

export default Task;
