import React, { useState } from "react";
import axios from "axios";
import todoListid from "./ListGenerator";

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
      console.log(todoListid);
    }
  };

  return (
    <div className="columns">
      <div className="column">
        <form className="form is-flex is-justify-content-space-between" onSubmit={handleSubmit}>
          <input
          className="input column "
            type="text"
            placeholder="Description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
          <button className="button is-info is-light  ml-2" type="submit">Add</button>
        </form>
      </div>
    </div>
  );
};

export default AddTodo;
