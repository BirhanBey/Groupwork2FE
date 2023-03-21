import React, { useState } from 'react';

const AddTodoList = ({ onAddTodo }) => {
  const [title, setTitle] = useState();

  const handleSubmit = (e) => {
    e.preventDefault();
    onAddTodo && onAddTodo(title.trim());
    setTitle('');
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Add a new todo list..."
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <button type="submit">Add</button>
      </form>
    </div>
  );
};

export default AddTodoList;