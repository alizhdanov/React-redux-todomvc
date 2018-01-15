export const addTodo = (id, value) => ({ type: 'ADD_TODO', id, value })
export const removeTodo = id => ({ type: 'REMOVE_TODO', id })
export const editTodo = (id, value) => ({ type: 'CHANGE_TODO', id, value })
export const toggleTodo = id => ({ type: 'TOGGLE_TODO', id})
