// @flow

import{
    ADD_TODO,
    TOGGLE_TODO,
    TOGGLE_ALL_TODOS,
    CHANGE_TODO,
    REMOVE_TODO,
    REMOVE_COMPLETED_TODOS,
    SET_STATE
} from '../actions/todos'

import type { TodoAction } from '../actions/todos';
import storeDb from '../db'

export type Todo = {
    id: number,
    value: string,
    completed: boolean
}

let initialState : Array<Todo> = [];
let nextTodoId : number = 0;

type State = Array<Todo>

const todos = (state: State = initialState, action: TodoAction): State => {
    let id, value, completed;
    switch(action.type) {
        case ADD_TODO:
            value = action.value;
            const newTodo : Todo = {
                id: nextTodoId++,
                value: value,
                completed: false
            }

            storeDb.set(newTodo);

            return [
                ...state,
                newTodo
            ]
        case TOGGLE_TODO:
            id = action.id;
            return state.map(todo => {
                if (todo.id !== id) {
                    return todo
                }

                const toggledTodo : Todo = {
                    ...todo,
                    completed: !todo.completed
                }

                storeDb.set(toggledTodo);

                return toggledTodo
            })
        case TOGGLE_ALL_TODOS:
            completed = action.completed;

            const toggledTodos : Array<Todo> = state.map(item => {
                item.completed = completed;
                return item
            })

            toggledTodos.forEach(todo => 
                storeDb.set(todo))

            return toggledTodos
        case CHANGE_TODO:
            id = action.id;
            value = action.value;
            return state.map(todo => {
                if (todo.id !== id) {
                    return todo
                }

                const newTodo : Todo = {
                    ...todo,
                    value: value
                }

                storeDb.set(newTodo)

                return newTodo
            })
        case REMOVE_TODO:
            id = action.id

            storeDb.delete(id)

            return state.filter(todo => todo.id !==  id)
        case REMOVE_COMPLETED_TODOS:
            storeDb.deleteCompleted()
            return state.filter(todo => !todo.completed);
        case SET_STATE:
            return action.todos
        default:
            return state
    }
}

export default todos