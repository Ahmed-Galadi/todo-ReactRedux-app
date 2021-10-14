export const addToDo = (newTodo) => {
    return {
        type: 'ADD_TODO',
        payload: {
            label: newTodo,
            id: Math.ceil(Math.random() * 100)
        }
    }
}

export const removeToDo = (id) => {
    return {
        type: 'DELETE_TODO',
        payload: id
    }
}