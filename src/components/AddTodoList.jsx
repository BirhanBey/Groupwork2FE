import React, { useState } from "react";
const AddTodoList = ({ onAddTodoList }) => {
  const [name, setName] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (name) {
      const response = await fetch(
        "https://s10.syntradeveloper.be/api/TodoList",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            name: name.trim(),
          }),
        }
      );
      const data = await response.json();
      onAddTodoList && onAddTodoList(data);
      setName("");
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Add a new todo list..."
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <button type="submit">Add</button>
      </form>
    </div>
  );
};

export default AddTodoList;
