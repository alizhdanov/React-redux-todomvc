import React, { Component } from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'

const ENTER_KEY = 13;
const ESCAPE_KEY = 27;

class TodoItem extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isEditing: false,
            editedValue: this.props.value
        };

        this.input = null;

        this.hadnleEdit = this.hadnleEdit.bind(this);
        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleSave = this.handleSave.bind(this);
        this.handleKeydown = this.handleKeydown.bind(this);
    }

    hadnleEdit () {
        this.setState(
            {isEditing: true},
            () => {
                this.input.focus();
                const tmp = this.input.value;
                this.input.value = '';
                this.input.value = tmp;
            }
        );
    }

    handleInputChange (event) {
        const target = event.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const name = target.name;
    
        this.setState({
          [name]: value
        });
    }

    handleSave () {
        const value = this.state.editedValue
        if (value.length) {
            this.props.onTodoChange(this.props.id, this.state.editedValue)
            this.setState({isEditing: false})
        }
    }

    handleKeydown (event) {
        const key = event.keyCode;

        if (key === ESCAPE_KEY) {
            this.setState({
                editedValue: this.props.value,
                isEditing: false
            });
        } else if (key === ENTER_KEY) {
            this.handleSave()
        }
    }
    
    render () {
        const {
            completed,
            value,
            id,
            onTodoToggle,
            onTodoDelete,
        } = this.props;

        const mainClass = classNames({
            completed,
            editing: this.state.isEditing
        });

        return (
            <li className={mainClass}>
                <div className="view">
                    <input className="toggle" type="checkbox" checked={completed} onChange={() => onTodoToggle(id)} />
                    <label onDoubleClick={this.hadnleEdit}>{value}</label>
                    <button className="destroy" onClick={() => onTodoDelete(this.props.id)} />
                </div>
                <input
                    ref={input => this.input = input}
                    autoFocus={true}
                    className="edit"
                    name="editedValue"
                    value={this.state.editedValue}
                    onChange={this.handleInputChange}
                    onKeyDown={this.handleKeydown}
                    onBlur={this.handleSave} />
            </li>
        )
    }
}

TodoItem.propTypes = {
    id: PropTypes.number.isRequired,
    value: PropTypes.string.isRequired,
    completed: PropTypes.bool.isRequired,
    onTodoChange: PropTypes.func.isRequired,
    onTodoToggle: PropTypes.func.isRequired,
    onTodoDelete: PropTypes.func.isRequired,
};

export default TodoItem