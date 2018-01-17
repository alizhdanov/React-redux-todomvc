let nextTodoId = 1
const initialState = [{
    id: 0,
    value: 'Test',
    completed: false
}]

const todos = (state = initialState, action) => {
    switch(action.type) {
        case 'ADD_TODO':
            return [
                ...state,
                {
                    id: nextTodoId++,
                    value: action.value,
                    completed: false
                }
            ]
        case 'TOGGLE_TODO':
            return state.map(todo => {
                if (todo.id !== action.id) {
                    return todo
                }

                return {
                    ...todo,
                    completed: !todo.completed
                }
            })
        case 'TOGGLE_ALL_TODOS':
            return state.map(item => {
                item.completed = action.completed
                return item
            })
        case 'CHANGE_TODO':
            return state.map(todo => {
                if (todo.id !== action.id) {
                    return todo
                }

                return {
                    ...todo,
                    value: action.value
                }
            })
        case 'REMOVE_TODO':
            return state.filter(todo => todo.id !== action.id)
        default:
            return state
    }
}

export default todos