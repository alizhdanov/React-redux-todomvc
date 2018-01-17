import React from 'react'

import TodoItem from './TodoItem'

const Main = ({todos, onTodoChange, toggleAll, onToggleAllChange}) => {
    const completedCount = todos.reduce((count, todo) =>
        todo.completed ? count + 1 : count,
        0
    )

    return (
        <section className="main">
            <input id="toggle-all"
                   checked={completedCount === todos.length}
                   className="toggle-all"
                   type="checkbox"
                   onChange={onToggleAllChange} />
            <label htmlFor="toggle-all">Mark all as complete</label>
            <ul className="todo-list">
                {/* These are here just to show the structure of the list items */}
                {/* List items should get the class `editing` when editing and `completed` when marked as completed */}
                {todos && todos.map((todo) => (
                  <TodoItem
                    key={todo.id}
                    onTodoChange={onTodoChange}
                    {...todo} />
                ))}
            </ul>
        </section>
)
}

export default Main