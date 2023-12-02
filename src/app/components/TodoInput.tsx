"use client";

import React, { useState } from "react";

import { useTodosContext } from "../contexts/TodosContext";
import { v4 as uuidv4 } from "uuid";

const TodoInput = () => {
  const [newTodo, setNewTodo] = useState("");
  const { setTodos } = useTodosContext();

  const addTodoHandler = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!newTodo || newTodo.trim().length === 0) return;
    setTodos((prev) => [
      ...prev,
      {
        id: uuidv4(),
        value: newTodo,
        isComplete: false,
      },
    ]);
    setNewTodo("");
  };

  return (
    <form name="add-todo" onSubmit={(e) => addTodoHandler(e)}>
      <input
        type="text"
        id="add-todo"
        placeholder="Create a new todo..."
        className="input w-full rounded-md bg-todos-input-bg text-sm text-text-fade shadow-md"
        value={newTodo}
        onChange={(e) => setNewTodo(e.target.value)}
      />
    </form>
  );
};

export default TodoInput;
