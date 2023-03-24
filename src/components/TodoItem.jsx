import React, { useState } from "react";

const TodoItem = ({
  todo,
  onDeleteTodo,
  onToggleTodo,
  onEditTodo,
  description,
}) => {
  const [editing, setEditing] = useState(false);
  const [newTitle, setNewTitle] = useState(description || todo.title);


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
    <div className=" container ml-0 ">
      <div className="">
        <li className="mb-1">      
          {editing ? (
            <div className="is-flex is-justify-content-center">              
              <input className="chackbox mr-1" type="checkbox" checked={todo.completed} onChange={handleToggle} />              
              <input
                className="input is-one-fifths is-hovered is-rounded"
                type="text"
                value={newTitle}
                onChange={(e) => setNewTitle(e.target.value)}
              />
              <div className="is-flex ml-2">
                <button className="button is-success is-light is-outlined mr-2" onClick={handleSave}>Save</button>
                <button className="button is-warning is-light" onClick={handleCancel}>Cancel</button>
              </div>
            </div>
          ) : (
            <div className="is-flex is-justify-content-space-between">
              <input className=" mr-5" type="checkbox" checked={todo.completed} onChange={handleToggle} />
              <h2 className="mr-auto is-align-self-center has-text-grey"
                style={{ textDecoration: todo.completed ? "line-through" : "none" }}>{newTitle}</h2>
              
              <div className="is-flex is-justify-content-flex-end">
                <button className="button is-info is-light mr-2" onClick={handleEdit}>Edit</button>
                <button className="button is-danger is-ligh is-outlined" title="Disabled button" onClick={handleDelete} disabled={!todo.completed}>
                  Delete
                </button>
              </div>            
             </div>
              )}
        </li>
      </div>
    </div>
  );
};

export default TodoItem;
