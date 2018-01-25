// @flow

export const ADD_TODO : string = 'ADD_TODO';
export const REMOVE_TODO : string  = 'REMOVE_TODO';
export const CHANGE_TODO : string  = 'CHANGE_TODO';
export const TOGGLE_TODO : string  = 'TOGGLE_TODO';
export const TOGGLE_ALL_TODOS : string  = 'TOGGLE_ALL_TODOS';

type AddTodoAction = { type: 'ADD_TODO', id: number, value: string };
type RemoveTodoAction = { type: 'REMOVE_TODO', id: number };
type EditTodoAction = { type: 'CHANGE_TODO', id: number, value: string };
type ToggleTodoAction = { type: 'TOGGLE_TODO', id: number };
type ToggleAllTodoAction = { type: 'TOGGLE_ALL_TODOS', completed: boolean };

export type TodoAction =
    | AddTodoAction
    | RemoveTodoAction
    | EditTodoAction
    | ToggleTodoAction
    | ToggleAllTodoAction

export const addTodo = (id: number, value: string): AddTodoAction => ({ type: ADD_TODO, id, value });
export const removeTodo = (id: number): RemoveTodoAction => ({ type: REMOVE_TODO, id });
export const editTodo = (id: number, value: string): EditTodoAction => ({ type: CHANGE_TODO, id, value });
export const toggleTodo = (id: number): ToggleTodoAction => ({ type: TOGGLE_TODO, id});
export const toggleAllTodos = (completed: boolean): ToggleAllTodoAction => ({ type: TOGGLE_ALL_TODOS, completed});