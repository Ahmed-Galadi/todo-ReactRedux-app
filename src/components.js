import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

export const TodoList = () => {
    const todos = useSelector(state => state.todos);
    const dispatch = useDispatch()
    const handleClick = (id) => dispatch({
            type: 'DELETE_TODO',
            payload: id
    });
    if(!todos || !todos.length) {
        return (<>
            <p>NOTHING TO DO !!</p>
        </>)
    }
    return (<ul>
    {todos.map((todo) => {
        return (<li>{todo.label}
        <button onClick={() => handleClick(todo.id)}>X</button>
        </li>)
    })}
    </ul>)
}

export const TodoInput = () => {
    const dispatch = useDispatch();
    const [newTodo, setNewTodo] = useState();
    const handleChange = (event) => setNewTodo(event.target.value);
    
    const add = () => dispatch({
        type: 'ADD_TODO',
        payload: {
            label: newTodo,
            id: Math.ceil(Math.random() * 100)
        }
    })

    return (<>
        <input onChange={handleChange} value={newTodo} type='text' />
        <button onClick={add}>ADD</button>
    </>)
}