import React, { Component } from "react";
import { Title } from "./title";
import { TodoList } from "./todoList"
import styles from "./styles.css";

export const TodoApp = ({ name }) => {
  const appTitle = "My To Do List";
  return (
    <div class="todo-app">
      <Title title={appTitle} />
      <TodoList />
    </div>
  );
};
