"use client";

import React, { useEffect, useRef, useState } from "react";
import TodoInput from "./TodoInput";
import { useTodosContext } from "../contexts/TodosContext";
import Image from "next/image";

const Todos = () => {
  const {
    todos,
    setTodos,
    completedTodos,
    setCompletedTodos,
    activeTodos,
    setActiveTodos,
  } = useTodosContext();

  const [todosToDisplay, setTodosToDisplay] = useState(todos);
  const [selectedFilter, setSelectedFilter] = useState<
    "all" | "active" | "completed"
  >("all");

  const draggedItem = useRef<number>();
  const draggedOverItem = useRef<number>();

  const markTodoAsCompleteHandler = (todoToCompleteID: string) => {
    const indexOfCompletedTodo = todos.findIndex(
      (todo) => todo.id === todoToCompleteID,
    );

    const newTodos = [...todos];

    if (!newTodos[indexOfCompletedTodo].isComplete) {
      newTodos[indexOfCompletedTodo].isComplete = true;
      setCompletedTodos((prev) => [...prev, newTodos[indexOfCompletedTodo]]);
    } else {
      newTodos[indexOfCompletedTodo].isComplete = false;
      setCompletedTodos((prev) =>
        prev.filter((todo) => todo.id !== todoToCompleteID),
      );
    }

    setTodos(newTodos);
  };

  const removeTodoHandler = (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>,
    todoToRemoveID: string,
  ) => {
    e.stopPropagation();
    setTodos((prevTodos) =>
      prevTodos.filter((todo) => todo.id !== todoToRemoveID),
    );
    setCompletedTodos((prev) =>
      prev.filter((todo) => todo.id !== todoToRemoveID),
    );
  };

  const clearCompletedHandler = () => {
    setTodos((prevTodos) =>
      prevTodos.filter((todo) => todo.isComplete === false),
    );
    setCompletedTodos([]);
  };

  const displayAllTodosHandler = () => {
    setTodosToDisplay(todos);
    setSelectedFilter("all");
  };

  const displayActiveTodosHandler = () => {
    setTodosToDisplay(activeTodos);
    setSelectedFilter("active");
  };

  const displayCompletedTodosHandler = () => {
    setTodosToDisplay(completedTodos);
    setSelectedFilter("completed");
  };

  const handleRearrangeItems = () => {
    const sortedTodos = [...todos];

    if (draggedItem.current === undefined) return;

    const draggedItemContent = sortedTodos.splice(draggedItem.current, 1)[0];

    if (draggedOverItem.current === undefined) return;

    sortedTodos.splice(draggedOverItem.current, 0, draggedItemContent);

    // draggedItem.current = 0;
    // draggedOverItem.current = 0;

    setTodos(sortedTodos);
    setSelectedFilter("all");
  };

  useEffect(() => {
    const activeTodos = todos.filter((todo) => !todo.isComplete);
    setTodosToDisplay(todos);
    setActiveTodos(activeTodos);
  }, [todos, setActiveTodos]);

  return (
    <section className="mx-auto w-11/12 -translate-y-10 space-y-4">
      <TodoInput />

      {todos.length !== 0 && (
        <>
          <ul className="overflow-hidden rounded-md bg-slate-700">
            {todosToDisplay.map((todo, index) => (
              <li
                draggable
                onDragStart={() => (draggedItem.current = index)}
                onDragEnter={() => (draggedOverItem.current = index)}
                onDragEnd={handleRearrangeItems}
                className={`flex cursor-pointer items-center justify-between gap-2 border-b-[1px] border-text-fade bg-todos-input-bg px-4 py-4 ${
                  todo.isComplete ? "line-through" : ""
                }`}
                key={todo.id}
                onClick={() => markTodoAsCompleteHandler(todo.id)}
              >
                <span
                  className={`flex aspect-square w-5 cursor-pointer items-center justify-center rounded-full border border-text-fade ${
                    todo.isComplete ? "bg-bg-gradient" : ""
                  }`}
                >
                  {todo.isComplete ? (
                    <Image
                      src="./images/icon-check.svg"
                      alt=""
                      width={15}
                      height={15}
                    />
                  ) : (
                    ""
                  )}
                </span>
                <span
                  className={`mr-auto ${
                    todo.isComplete ? "text-text-fade" : "text-text-main"
                  }`}
                >
                  {todo.value}
                </span>
                <button onClick={(e) => removeTodoHandler(e, todo.id)}>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="18px"
                    height="18px"
                    className="fill-text-fade"
                  >
                    <path
                      fillRule="evenodd"
                      d="M16.97 0l.708.707L9.546 8.84l8.132 8.132-.707.707-8.132-8.132-8.132 8.132L0 16.97l8.132-8.132L0 .707.707 0 8.84 8.132 16.971 0z"
                    />
                  </svg>
                </button>
              </li>
            ))}
            <div className="flex items-center justify-between bg-todos-input-bg px-4  py-4 text-text-fade">
              <p>
                {activeTodos.length >= 0 ? activeTodos.length : 0} items left
              </p>
              <button onClick={clearCompletedHandler}>Clear completed</button>
            </div>
          </ul>
          <div className="flex items-center justify-center gap-4 rounded-md bg-todos-input-bg px-4 py-4 text-text-fade">
            <button
              className={`${
                selectedFilter === "all" ? "text-blue-active-filter" : ""
              }`}
              onClick={displayAllTodosHandler}
            >
              All
            </button>
            <button
              className={`${
                selectedFilter === "active" ? "text-blue-active-filter" : ""
              }`}
              onClick={displayActiveTodosHandler}
            >
              Active
            </button>
            <button
              className={`${
                selectedFilter === "completed" ? "text-blue-active-filter" : ""
              }`}
              onClick={displayCompletedTodosHandler}
            >
              Completed
            </button>
          </div>
        </>
      )}
    </section>
  );
};

export default Todos;
