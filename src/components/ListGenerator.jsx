import React, {useState, useEffect} from 'react'
import AddTodoList from './AddTodoList'
import TodoList from './TodoList'
import axios from 'axios'

const ListGenerator = () => {
    const [allTodos, setAllTodos] = useState([]);

    const handleAddTodo = (title) => {
        const newTodo = { id: Date.now(), title, completed: false, };
        setAllTodos([...allTodos, newTodo]);
      };
    
      useEffect(() => {
        const fetchData = async () => {
          
          try {
            const response = await axios.get("http://s10.syntradeveloper.be/api/");
            // console.log(response);
            setAllTodos(response.data.map((item) => ({ id: item.id, title: item.name, completed: false, todos:item.todos })));

           } catch (error) {
            console.error(error);
          }
        };
        fetchData();
      }, []);
    
  return (
    <div className=''>        
      <AddTodoList onAddTodo={handleAddTodo} />
        <div className='columns '>
          <ul className='column is-flex-wrap-wrap' style={{listStyle: 'none', display: 'flex'}}>
            {allTodos.map((allTodoList) => (
              <TodoList
                todoListId={allTodoList.id}
                key={allTodoList.id} 
                allTodoList={allTodoList.title}
                todos={allTodoList.todos}          
              />
            ))}
          </ul>
        </div>
      </div>
  )
}

export default ListGenerator