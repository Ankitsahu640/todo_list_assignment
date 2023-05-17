import React, { useRef, useState } from 'react'

function AddModal(props) {
    const {addTodo} = props;
    const [todo,setTodo] = useState('');
    const closeRef= useRef(null);

    const todoChange = (e) => {
        setTodo(e.target.value);
    }
    const handleSubmit = (e) =>{
        e.preventDefault();
        addTodo(todo);
        setTodo('');
        closeRef.current.click();
    }

  return (
    <div className='m-2'>
      <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#staticBackdrop">
        Add Todo
        </button>
        <div class="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
        <div class="modal-dialog ">
            <div class="modal-content colorPurple">
                <div class="modal-header">
                    <h1 class="modal-title fs-5" id="staticBackdropLabel">Add Todo</h1>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <form onSubmit={handleSubmit}>
                    <div class="modal-body ">
                        <input class="form-control" type="text" placeholder="Enter your todo task..." onChange={todoChange} value={todo} aria-label="readonly input example" />
                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal" ref={closeRef} >Close</button>
                        <button type="submit" class="btn btn-primary">Add</button>
                    </div>
                </form>
            </div>
        </div>
        </div>
    </div>
  )
}

export default AddModal
