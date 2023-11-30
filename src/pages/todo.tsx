import React from "react";
import {getTodoItemsByStatus} from '../utils/getTodoItemsByStatus'
import { useGetToDoItems } from "../hooks/useGetToDoItems";
import ToDoGroup from "../components/ToDoGroup";

const ToDo = () => {
  const toDoItems = useGetToDoItems();
  const {completedToDoItems, incompleteToDoItems} = getTodoItemsByStatus(toDoItems);

  return (
    <div>
      <h1>My todo list</h1>
      <ToDoGroup title="Completed" todoItems={completedToDoItems}/>
      <ToDoGroup title="Incomplete" todoItems={incompleteToDoItems}/>
    </div>
  );
};

export default ToDo;