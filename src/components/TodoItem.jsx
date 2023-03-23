import React, { useState } from "react";

const TodoItem = ({
  todo,
  onDeleteTodo,
  onToggleTodo,
  onEditTodo,
  description,
  todos,
}) => {
  const [editing, setEditing] = useState(false);
  const [newTitle, setNewTitle] = useState(description || todo.title);

  // const [eachDescription, setEachDescription] = useState()
  // console.log(description);

  // console.log(todo.title);

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
    fetch(`http://s10.syntradeveloper.be/api/Todo&id=${todo.id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        ...todo,
        isCompleted: true,
      }),
    })
      .then((response) => response.json())
      .then((data) => {
        onToggleTodo && onToggleTodo(todo.id);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  };

  return (
    <li>
      <input type="checkbox" checked={todo.completed} onChange={handleToggle} />
      {editing ? (
        <>
          <input
            type="text"
            value={newTitle}
            onChange={(e) => setNewTitle(e.target.value)}
          />
          <button onClick={handleSave}>Save</button>
          <button onClick={handleCancel}>Cancel</button>
        </>
      ) : (
        <>
          <span
            style={{ textDecoration: todo.completed ? "line-through" : "none" }}
          >
            {newTitle}
          </span>{" "}
          {/* Değişiklik burada yapıldı. */}
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
