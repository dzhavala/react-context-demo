import React, { FC, createContext, useState, ReactNode } from "react";
import { ITodo, TodoContextType } from "../types/todo";

export const TodoContext = createContext<TodoContextType | null>(null);

const initialTodosState: ITodo[] = [
  {
    id: 1,
    title: "post 1",
    description: "this is a description",
    status: false,
  },
  {
    id: 2,
    title: "post 2",
    description: "this is a description",
    status: false,
  },
];

type TodoProviderProps = {
  children: ReactNode
}

export const TodoProvider: FC<TodoProviderProps> = ({ children }) => {
  const [todos, setTodos] = useState<ITodo[]>(initialTodosState);

  const saveTodo = (todo: ITodo) => {
    const newTodo: ITodo = {
      id: Math.random(),
      title: todo.title,
      description: todo.description,
      status: false,
    };

    setTodos([...todos, newTodo]);
  };

  const updateTodo = (id: number) => {
    const todo: ITodo | undefined = todos.find((todo: ITodo) => todo.id === id);
    if (todo) {
      todo.status = true;
      setTodos([...todos]);
    }
  };

  return (
    <TodoContext.Provider value={{ todos, saveTodo, updateTodo }}>
      {children}
    </TodoContext.Provider>
  );
};

export default TodoProvider;
