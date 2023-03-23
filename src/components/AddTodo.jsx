import React, { useState } from "react";
import axios from "axios";
import todoListid from "./ListGenerator";

const AddTodo = ({ onAddTodo, todoListId }) => {
  const [description, setDescription] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(
        "http://s10.syntradeveloper.be/api/Todo",
        {
          description,
          TodoList_id: todoListId,
        }
      );

      onAddTodo && onAddTodo(response.data);
      setDescription("");
    } catch (error) {
      console.error(error);
      console.log(todoListid);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />

      <button type="submit">Add</button>
    </form>
  );
};

export default AddTodo;
