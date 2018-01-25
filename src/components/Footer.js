import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'

import {
    VISIBILITY_FILTERS
} from '../reducers/visibility'

const VisibilityLink = ({name, activeFilter, onClick}) => {
    const linkClass = classNames({
       selected: name === activeFilter
    });
    return (
        <a className={linkClass} href="#/" onClick={onClick}>{name}</a>
    )
}


// TODO: add router here
const Footer = ({visibility, changeFilter}) => (
    <footer className="footer">
        {/* This should be `0 items left` by default */}
        <span className="todo-count"><strong>0</strong> item left</span>
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
        <button className="clear-completed">Clear completed</button>
    </footer>
)

Footer.propTypes = {
    visibility: PropTypes.string.isRequired,
    changeFilter: PropTypes.func.isRequired
};

export default Footer