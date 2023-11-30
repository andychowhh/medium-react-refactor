import { ToDoItem } from "../api/toDoService";

export const getTodoItemsByStatus = (items: ToDoItem[]) => {
  const completedToDoItems = items.filter((item) => item.isCompleted === true);
  const incompleteToDoItems = items.filter(
    (item) => item.isCompleted === false
  );

  return {
    completedToDoItems,
    incompleteToDoItems,
  };
};
