// @flow
import * as React from 'react'
import classNames from 'classnames'
import {
    VISIBILITY_FILTERS
} from '../actions/visibility'

import type { Todo } from '../reducers/todos'
import type { filter, ChangeFilter } from '../actions/visibility'
import type { RemoveCompletedTodos } from '../actions/todos'

const VisibilityLink = ({name, activeFilter, onClick}) => {
    const linkClass = classNames({
       selected: name === activeFilter
    });
    return (
        <a className={linkClass} href="#/" onClick={onClick}>{name}</a>
    )
}

type FooterProps = {
    todos: Array<Todo>,
    visibility: filter,
    changeFilter(string): ChangeFilter,
    clear(): RemoveCompletedTodos
}

// TODO: add router here
const Footer = ({todos, visibility, changeFilter, clear} : FooterProps) => {
    const itemsLeft = todos.filter(item => !item.completed).length;
    const plural = itemsLeft > 1 ? 's' : '';
    const itemsCompleted = todos.filter(item => item.completed).length;

    return (
        <footer className="footer">
            {/* This should be `0 items left` by default */}
            <span className="todo-count"><strong>{itemsLeft}</strong> item{plural} left</span>
            {/* Remove this if you don't implement routing */}
            <ul className="filters">
                {VISIBILITY_FILTERS.map(filter => (
                    <li key={filter}>
                        <VisibilityLink name={filter} activeFilter={visibility} onClick={(event) => {
                            event.preventDefault()
                            changeFilter(filter)
                        }} />
                    </li>
                ))}
            </ul>
            {/* Hidden if no completed items are left ↓ */}
            {itemsCompleted > 0 &&
                <button className="clear-completed" onClick={clear}>Clear completed</button>
            }
        </footer>
    )
}

export default Footer