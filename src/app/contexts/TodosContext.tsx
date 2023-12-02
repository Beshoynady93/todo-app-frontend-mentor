"use client";

import React, { createContext, useContext, useState } from "react";

type TodosContext = {
  todos: Todo[];
  setTodos: React.Dispatch<React.SetStateAction<Todo[]>>;
  completedTodos: Todo[];
  setCompletedTodos: React.Dispatch<React.SetStateAction<Todo[]>>;
  activeTodos: Todo[];
  setActiveTodos: React.Dispatch<React.SetStateAction<Todo[]>>;
};

const TodosContext = createContext<TodosContext | null>(null);

type TodosContextProviderProps = {
  children: React.ReactNode;
};

type Todo = {
  id: string;
  value: string;
  isComplete: boolean;
};
type Todos = Todo[];

export const TodosContextProvider = ({
  children,
}: TodosContextProviderProps) => {
  const [todos, setTodos] = useState<Todos>([]);
  const [completedTodos, setCompletedTodos] = useState<Todo[]>([]);
  const [activeTodos, setActiveTodos] = useState<Todo[]>([]);

  return (
    <TodosContext.Provider
      value={{
        todos,
        setTodos,
        completedTodos,
        setCompletedTodos,
        activeTodos,
        setActiveTodos,
      }}
    >
      {children}
    </TodosContext.Provider>
  );
};

export default TodosContextProvider;

export const useTodosContext = () => {
  const context = useContext(TodosContext);

  if (!context)
    throw new Error("useTodosContext must be used a TodosContextProvider");

  return context;
};
