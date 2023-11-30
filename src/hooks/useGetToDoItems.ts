import { useEffect, useState } from "react";
import { ToDoItem, fetchToDos } from "../api/toDoService";

export const useGetToDoItems = (): ToDoItem[] => {
  const [toDoItems, setToDoItems] = useState<ToDoItem[]>([]);

  useEffect(() => {
    const fetctToDoItems = async () => {
      const allToDoItems = await fetchToDos();
      setToDoItems(allToDoItems);
    };
    fetctToDoItems();
  }, []);
  return toDoItems;
};
