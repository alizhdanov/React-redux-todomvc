// @flow

export const ADD_TODO : string = 'ADD_TODO';
export const REMOVE_TODO : string  = 'REMOVE_TODO';
export const CHANGE_TODO : string  = 'CHANGE_TODO';
export const TOGGLE_TODO : string  = 'TOGGLE_TODO';
export const TOGGLE_ALL_TODOS : string  = 'TOGGLE_ALL_TODOS';
export const REMOVE_COMPLETED_TODOS : string = 'REMOVE_COMPLETED_TODOS';

type AddTodoAction = { type: string, value: string };
type RemoveTodoAction = { type: string, id: number };
type EditTodoAction = { type: string, id: number, value: string };
type ToggleTodoAction = { type: string, id: number };
type ToggleAllTodoAction = { type: string, completed: boolean };
type RemoveCompletedTodos = { type: string};

export type TodoAction =
    | AddTodoAction
    | RemoveTodoAction
    | EditTodoAction
    | ToggleTodoAction
    | ToggleAllTodoAction
    | RemoveCompletedTodos

export const addTodo = (value: string): AddTodoAction => ({ type: ADD_TODO, value });
export const removeTodo = (id: number): RemoveTodoAction => ({ type: REMOVE_TODO, id });
export const editTodo = (id: number, value: string): EditTodoAction => ({ type: CHANGE_TODO, id, value });
export const toggleTodo = (id: number): ToggleTodoAction => ({ type: TOGGLE_TODO, id});
export const toggleAllTodos = (completed: boolean): ToggleAllTodoAction => ({ type: TOGGLE_ALL_TODOS, completed});
export const removeCompletedTodos = (): RemoveCompletedTodos => ({ type: REMOVE_COMPLETED_TODOS});