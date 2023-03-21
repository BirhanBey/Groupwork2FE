import React, { useState } from "react";
import AddTodo from "./AddTodo";
import TodoItem from "./TodoItem";

const TodoList = () => {
  const [todos, setTodos] = useState([]);
  const [isVisible, setIsVisible] = useState(true);

  const handleAddTodo = (title) => {
    const newTodo = { id: Date.now(), title, completed: false };
    setTodos([...todos, newTodo]);
  };

  const handleDeleteTodo = (id) => {
    const updatedTodos = todos.filter((todo) => todo.id !== id);
    setTodos(updatedTodos);
  };

  const handleToggleTodo = (id) => {
    const updatedTodos = todos.map((todo) => {
      if (todo.id === id) {
        todo.completed = !todo.completed;
      }
      return todo;
    });
    setTodos(updatedTodos);
  };

  const handleEditTodo = (id, newTitle) => {
    const updatedTodos = todos.map((todo) => {
      if (todo.id === id) {
        todo.title = newTitle;
      }
      return todo;
    });
    setTodos(updatedTodos);
  };
  const handleDeleteAll = () => {
    setIsVisible(false);
  };

  if (!isVisible) {
    return null; // Return null to remove the component from the DOM
  }

  return (
    <div>
      <h1>Todo List</h1>
      <button onClick={handleDeleteAll}>Delete List</button>
      <AddTodo onAddTodo={handleAddTodo} />
      <ul style={{ listStyle: "none" }}>
        {todos.map((todo) => (
          <TodoItem
            key={todo.id}
            todo={todo}
            onDeleteTodo={handleDeleteTodo}
            onToggleTodo={handleToggleTodo}
            onEditTodo={handleEditTodo}
          />
        ))}
      </ul>
    </div>
  );
};

export default TodoList;
