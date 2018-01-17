import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'

const VisibilityLink = ({name, activeFilter, onClick}) => {
    const linkClass = classNames({
       selected: name === activeFilter
    });
    return (
        <a className={linkClass} href="#/" onClick={onClick}>{name}</a>
    )
}


// TODO: add router here
const Footer = () => (
    <footer className="footer">
        {/* This should be `0 items left` by default */}
        <span className="todo-count"><strong>0</strong> item left</span>
        {/* Remove this if you don't implement routing */}
        <ul className="filters">
            <li>
                <a className="selected" href="#/">All</a>
            </li>
            <li>
                <a href="#/active">Active</a>
            </li>
            <li>
                <a href="#/completed">Completed</a>
            </li>
        </ul>
        {/* Hidden if no completed items are left ↓ */}
        <button className="clear-completed">Clear completed</button>
    </footer>
)

Footer.propTypes = {
    visibility: PropTypes.string.isRequired
};

export default Footer