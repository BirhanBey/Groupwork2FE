import React, { useState } from 'react';

const TodoItem = ({ todo, onDeleteTodo, onToggleTodo, onEditTodo }) => {
  const [editing, setEditing] = useState(false);
  const [newTitle, setNewTitle] = useState(todo.title);

  const handleEdit = () => {
    setEditing(true);
  };

  const handleSave = () => {
    onEditTodo && onEditTodo(todo.id, newTitle.trim());
    setEditing(false);
  };

  const handleCancel = () => {
    setNewTitle(todo.title);
    setEditing(false);
  };

  const handleDelete = () => {
    onDeleteTodo && onDeleteTodo(todo.id);
  };

  const handleToggle = () => {
    onToggleTodo && onToggleTodo(todo.id);
  };

  return (
    <li>
      <input type="checkbox" checked={todo.completed} onChange={handleToggle} />
      {editing ? (
      <>
        <input type="text" value={newTitle} onChange={(e) => setNewTitle(e.target.value)} />
        <button onClick={handleSave}>Save</button>
        <button onClick={handleCancel}>Cancel</button>
      </>
      ) : (
      <>
        <span style={{ textDecoration: todo.completed ? 'line-through' : 'none' }}>{todo.title}</span>
        <button onClick={handleEdit}>Edit</button>
        <button onClick={handleDelete} disabled={!todo.completed}>
        Delete
        </button>
      </>
      )}
    </li>
  );
};

export default TodoItem;