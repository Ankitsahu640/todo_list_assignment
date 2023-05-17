import React, { useState } from 'react'
import AddModal from './AddModal'

function TodoList() {

  const [todos, setTodos] = useState([]);
  const [search, setSearch] = useState('');

  const handleSearch=(e)=>{
    if(e.key==="Enter"){
      e.preventDefault();
      setSearch(e.target.value.toLowerCase().trim());
    }
  } 

  const handleAddTodo = (newTodo) => {
    setTodos([...todos, { id: new Date().valueOf(), text: newTodo }]);
  };

  const handleDeleteTodo = (todoId) => {
    setTodos(todos.filter((todo) => todo.id !== todoId));
  };

  const filteredTodos = todos.filter((todo) =>
    todo.text.toLowerCase().includes(search)
  );

  return (
    <div className='todo-container'>
      <div className="searchBar">
       <input type="search" id="search" placeholder='Search Todo Task...' onKeyDown={handleSearch}/>
      </div>
      <div className="addTodo">
        <h1 >Todo List</h1>
        <AddModal addTodo={handleAddTodo}/>
      </div>
      <div className="todoList">
        {(() => {
          if (!todos.length) {
            return (
              <div>Your todo list is currently empty.</div>
            )
          } else if (!filteredTodos.length) {
            return (
              <div>No results found for <i>"{search}"</i>. Try searching for something else.</div>
            )
          } else {
            return (
              filteredTodos.map((todo) => (
                <div key={todo.id} className="list-item d-flex justify-content-between colorPurple">
                  <div className='m-1'>{todo.text}</div>
                  <div>
                    <button type="button" className="btn btn-danger" onClick={() => handleDeleteTodo(todo.id)}>
                      Delete
                    </button>
                  </div>
                </div>
              ))
            )
          }
        })()}
      </div>
    </div>
  )
}

export default TodoList
