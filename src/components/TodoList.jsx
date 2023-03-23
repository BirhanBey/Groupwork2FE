import React, { useState, useEffect } from "react";
import AddTodo from "./AddTodo";
import TodoItem from "./TodoItem";

const TodoList = ({allTodoList, todos, todoListId}) => {
  const [eachTodos, setEachTodos] = useState(todos || []);
  const [isVisible, setIsVisible] = useState(true);

  const handleAddTodo = (title) => {
    const newTodo = { id: Date.now(), title, completed: false };
    setEachTodos([...eachTodos, newTodo]);
  };

  const handleDeleteTodo = (id) => {
    const updatedTodos = eachTodos.filter((todo) => todo.id !== id);
    setEachTodos(updatedTodos);
  };

  const handleToggleTodo = (id) => {
    const updatedTodos = eachTodos.map((todo) => {
      if (todo.id === id) {
        todo.completed = !todo.completed;
      }
      return todo;
    });
    setEachTodos(updatedTodos);
  };

  const handleEditTodo = (id, newTitle) => {
    const updatedTodos = eachTodos.map((todo) => {
      if (todo.id === id) {
        todo.title = newTitle;
      }
      return todo;
    });
    setEachTodos(updatedTodos);
  };

  const handleDeleteAll = () => {
    setIsVisible(false);
  };

  if (!isVisible) {
    return null; // Return null to remove the component from the DOM
  }

  return (
    <div>
      <div  >
      <h3>{allTodoList}</h3>
      <button onClick={handleDeleteAll} >Delete List</button>
      </div>
      <AddTodo onAddTodo={handleAddTodo} todoListId={todoListId} />
      <ul style={{ listStyle: "none" }}>
        {eachTodos.map((todo) => (
          <TodoItem
            key={todo.id}
            todo={todo}
            onDeleteTodo={handleDeleteTodo}
            onToggleTodo={handleToggleTodo}
            onEditTodo={handleEditTodo}
            description={todo.description}
            
          />
        ))}
      </ul>
    </div>
  );
};

export default TodoList;