import React from "react";
import {getTodoItemsByStatus} from '../utils/getTodoItemsByStatus'
import { useGetToDoItems } from "../hooks/useGetToDoItems";

const ToDo = () => {
  const toDoItems = useGetToDoItems();
  const {completedToDoItems, incompleteToDoItems} = getTodoItemsByStatus(toDoItems);

  return (
    <div>
      <h1>My todo list</h1>
      <h2>Completed:</h2>
      {completedToDoItems.map(({ id, name }) => (
        <div key={id}>
          <h3>{name}</h3>
        </div>
      ))}
      <h2>Not Completed:</h2>
      {incompleteToDoItems.map(({ id, name }) => (
        <div key={id}>
          <h3>{name}</h3>
        </div>
      ))}
    </div>
  );
};

export default ToDo;