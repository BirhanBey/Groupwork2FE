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
    <div className="columns">
      <div className="column is-full is-flex is-justify-content-center">
        <form className="form is-flex mb-6 " onSubmit={handleSubmit}>
          <input
            className="input"
            type="text"
            placeholder="Add a new todo list..."
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <button className="button is-outlined is-info is-light ml-2" type="submit">Add</button>
        </form>
      </div>
    </div>
  );
};

export default AddTodoList;
