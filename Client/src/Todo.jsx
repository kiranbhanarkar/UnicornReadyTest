import React, { useState } from 'react'

function Todo() {
    const [todos, setTodos] = useState([]);
    console.log(todos);
    

    const handleSubmit = (event) => {
        event.preventDefault();
        const newTodo = event.target.elements.todo.value;
            const updatedTodos = [...todos, { text: newTodo,  editing: false }];
            setTodos(updatedTodos);
            event.target.elements.todo.value = "";
    }

    const handleDelete = (index) => {
        const updatedTodos = [...todos];
        updatedTodos.splice(index, 1);
        setTodos(updatedTodos);
    }

    const handleEdit = (index, event) => {
        const updatedTodos = [...todos];
        updatedTodos[index].text = event.target.value;
        setTodos(updatedTodos);
    }

    const handleEditButtonClick = (index) => {
        const updatedTodos = [...todos];
        updatedTodos[index].editing = !updatedTodos[index].editing;
        setTodos(updatedTodos);
    }

    
    return (
        <div className='container' style={{height:'100vh'}}>
            <h1 className='display-2 text-center'>To-do List</h1>
            <form className='d-flex mb-4' onSubmit={handleSubmit}>
                <input type='text' placeholder='Enter To-do text' name='todo' className='input form-control w-75' />

                <button type='submit' className='btn btn-primary w-25'>Add Todo</button>
            </form>
            <div className='d-flex mb-4'>
            <div className='w-100 m-2'>
                <h2 className='display-6'>Tasks</h2>
                <ul className='list-group'>
                    {todos.map((todo, i) => (
                        <li key={i} className='list-group-item'style={{backgroundColor: 'transparent'}} >
                            {todo.editing ?
                                <input className='input form-control' value={todo.text} onChange={(e) => handleEdit(i, e)} />
                                :
                                <div style={{ float: 'left'}} >
                                    {todo.text}
                                </div>
                            }
                            <button style={{ float: 'right' }} className='btn btn-danger m-2' onClick={() => handleDelete(i)} >Delete</button>
                            <button style={{ float: 'right' }} className='btn btn-secondary m-2' onClick={() => handleEditButtonClick(i)} >{todo.editing ? 'Save' : 'Update'}</button>
                        </li>
                    ))}
                </ul>
                <div>
                
                </div>
            </div>

         </div>

                 
        </div>
    )
}

export default Todo;