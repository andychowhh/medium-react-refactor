import React, { useState, useEffect } from "react";
import { fetchToDos, ToDoItem } from "../api/toDoService";

const ToDo = () => {
  const [completedToDoItems, setCompletedToDoItems] = useState<ToDoItem[]>([]);
  const [incompleteToDoItems, setIncompleteToDoItems] = useState<ToDoItem[]>([]);

  useEffect(() => {
    const fetctToDoItems = async () => {
      const allToDoItems = await fetchToDos();
      
      const completed = allToDoItems.filter((item) => item.isCompleted === true);
      const incompleted = allToDoItems.filter(
        (item) => item.isCompleted === false
      );

      setCompletedToDoItems(completed);
      setIncompleteToDoItems(incompleted);
    };
    fetctToDoItems();
  }, []);

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