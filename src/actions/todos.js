// @flow

export const ADD_TODO : 'ADD_TODO' = 'ADD_TODO';
export const REMOVE_TODO : 'REMOVE_TODO'  = 'REMOVE_TODO';
export const CHANGE_TODO : 'CHANGE_TODO'  = 'CHANGE_TODO';
export const TOGGLE_TODO : 'TOGGLE_TODO'  = 'TOGGLE_TODO';
export const TOGGLE_ALL_TODOS : 'TOGGLE_ALL_TODOS'  = 'TOGGLE_ALL_TODOS';
export const REMOVE_COMPLETED_TODOS : 'REMOVE_COMPLETED_TODOS' = 'REMOVE_COMPLETED_TODOS';

type AddTodoAction = { type: typeof ADD_TODO, value: string };
type RemoveTodoAction = { type: typeof REMOVE_TODO, id: number };
type EditTodoAction = { type: typeof CHANGE_TODO, id: number, value: string };
type ToggleTodoAction = { type: typeof TOGGLE_TODO, id: number };
type ToggleAllTodoAction = { type: typeof TOGGLE_ALL_TODOS, completed: boolean };
type RemoveCompletedTodos = { type: typeof REMOVE_COMPLETED_TODOS};

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