import React, {useState} from 'react'
import AddTodo from './AddTodo'
import TodoList from './TodoList'

const ListGenerator = () => {
    const [todos, setTodos] = useState([]);

    const handleAddTodo = (title) => {
        const newTodo = { id: Date.now(), title, completed: false };
        setTodos([...todos, newTodo]);
      };

  return (
    <div>
        
      <AddTodo onAddTodo={handleAddTodo} />
      <ul style={{listStyle: 'none'}}>
        {todos.map((todoList) => (
          <TodoList
            key={todoList.id}            
          />
        ))}
      </ul>

    </div>
  )
}

export default ListGenerator