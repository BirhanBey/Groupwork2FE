import React, { useState } from "react";
import axios from "axios";

const AddTodo = ({ onAddTodo, todoListId }) => {
  const [description, setDescription] = useState("");

  const handleSubmit = async () => {

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
      onAddTodo && onAddTodo({ error });
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
