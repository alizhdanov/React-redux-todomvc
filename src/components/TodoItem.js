import React, { Component } from 'react'

class TodoItem extends Component {
    state = {
        isEditing: false,
        editedValue: this.props.value
    }

    hadnleEdit = () => {
        this.setState({isEditing: true})
    }

    handleInputChange = (event) => {
        const target = event.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const name = target.name;
    
        this.setState({
          [name]: value
        });
    }

    handleSave = () => {
        if (this.state.editedValue.length) {
            this.props.onTodoChange(this.props.id, this.state.editedValue)
            this.setState({isEditing: false})
        }
    }
    
    render () {
        const {completed, value} = this.props
        let mainClass = ''
        if (completed) {
            mainClass += 'completed'
        }
        if (this.state.isEditing) {
            mainClass += ' editing'
        }
        return (
            <li className={mainClass}>
                <div className="view">
                    <input className="toggle" type="checkbox" checked={completed} />
                    <label onDoubleClick={this.hadnleEdit}>{value}</label>
                    <button className="destroy" />
                </div>
                <input 
                    className="edit"
                    name="editedValue"
                    value={this.state.editedValue}
                    onChange={this.handleInputChange}
                    onBlur={this.handleSave} />
            </li>
        )
    }
}

export default TodoItem