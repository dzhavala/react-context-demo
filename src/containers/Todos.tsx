import { FC, useContext } from "react";
import { ITodo, TodoContextType } from "../types/todo";
import { TodoContext } from "../context/todoContext";
import Todo from "./Todo";

const Todos: FC = () => {
  const { todos, updateTodo } = useContext(TodoContext) as TodoContextType;

  return (
    <>
      {todos.map((todo: ITodo) => <Todo key={todo.id} todo={todo} updateTodo={updateTodo}/>)}
    </>
  );
};

export default Todos;
