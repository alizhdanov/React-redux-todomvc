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
    let id, value, completed;
    switch(action.type) {
        case ADD_TODO:
            value = action.value;
            return [
                ...state,
                {
                    id: nextTodoId++,
                    value: value,
                    completed: false
                }
            ]
        case TOGGLE_TODO:
            id = action.id;
            return state.map(todo => {
                if (todo.id !== id) {
                    return todo
                }

                return {
                    ...todo,
                    completed: !todo.completed
                }
            })
        case TOGGLE_ALL_TODOS:
            completed = action.completed;
            return state.map(item => {
                item.completed = completed;
                return item
            })
        case CHANGE_TODO:
            id = action.id;
            value = action.value;
            return state.map(todo => {
                if (todo.id !== id) {
                    return todo
                }

                return {
                    ...todo,
                    value: value
                }
            })
        case REMOVE_TODO:
            id = action.id
            return state.filter(todo => todo.id !==  id)
        case REMOVE_COMPLETED_TODOS:
            return state.filter(todo => !todo.completed);
        default:
            return state
    }
}

export default todos