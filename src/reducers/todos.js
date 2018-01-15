const todos = (state = [], action) => {
    switch(action.type) {
        case 'ADD_TODO':
            return [
                ...state,
                {
                    id: action.id,
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