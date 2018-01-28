import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'

import {
    VISIBILITY_FILTERS
} from '../actions/visibility'

const VisibilityLink = ({name, activeFilter, onClick}) => {
    const linkClass = classNames({
       selected: name === activeFilter
    });
    return (
        <a className={linkClass} href="#/" onClick={onClick}>{name}</a>
    )
}


// TODO: add router here
const Footer = ({todos, visibility, changeFilter, clear}) => {
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

Footer.propTypes = {
    todos: PropTypes.array.isRequired,
    visibility: PropTypes.string.isRequired,
    changeFilter: PropTypes.func.isRequired,
    clear: PropTypes.func.isRequired
};

export default Footer