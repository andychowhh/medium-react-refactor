import React from "react";
import { ToDoItem } from "../api/toDoService";

interface ToDoGroupProp {
  title: string;
  todoItems: ToDoItem[];
}

const ToDoGroup = ({ title, todoItems }: ToDoGroupProp) => {
  return (
    <>
      <h2>{title}:</h2>
      {todoItems.map(({ id, name }) => (
        <div key={id}>
          <h3>{name}</h3>
        </div>
      ))}
    </>
  );
};

export default ToDoGroup;
