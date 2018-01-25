// @flow

import{
    ADD_TODO,
    TOGGLE_TODO,
    TOGGLE_ALL_TODOS,
    CHANGE_TODO,
    REMOVE_TODO,
    REMOVE_COMPLETED_TODOS
} from '../actions/todos'

import type { TodoAction } from '../actions/todos'

let nextTodoId = 0
const initialState = [
  {
    id: 887,
    value: 'Test',
    completed: false
  },
  {
    id: 947,
    value: 'Muchaho',
    completed: true
  }
]

type Todo = {
    id: number,
    value: string,
    completed: boolean
}
type State = Array<Todo>

const todos = (state: State = initialState, action: TodoAction): State => {
    switch(action.type) {
        case ADD_TODO:
            return [
                ...state,
                {
                    id: nextTodoId++,
                    value: action.value,
                    completed: false
                }
            ]
        case TOGGLE_TODO:
            return state.map(todo => {
                if (todo.id !== action.id) {
                    return todo
                }

                return {
                    ...todo,
                    completed: !todo.completed
                }
            })
        case TOGGLE_ALL_TODOS:
            return state.map(item => {
                item.completed = action.completed
                return item
            })
        case CHANGE_TODO:
            return state.map(todo => {
                if (todo.id !== action.id) {
                    return todo
                }

                return {
                    ...todo,
                    value: action.value
                }
            })
        case REMOVE_TODO:
            return state.filter(todo => todo.id !== action.id)
        case REMOVE_COMPLETED_TODOS:
            return state.filter(todo => !todo.completed);
        default:
            return state
    }
}

export default todos