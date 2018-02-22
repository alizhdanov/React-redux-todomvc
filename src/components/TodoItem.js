// @flow

import * as React from 'react'
import classNames from 'classnames'

const ENTER_KEY = 13;
const ESCAPE_KEY = 27;

type Props = {
    id: number,
    value: string,
    completed: boolean,
    onTodoChange(number, string): void,
    onTodoToggle(number): void,
    onTodoDelete(number): void,
}

type State = {
    isEditing: boolean,
    editedValue: string
}

class TodoItem extends React.Component<Props, State> {
    constructor(props: Props) {
        super(props);
        this.state = {
            isEditing: false,
            editedValue: this.props.value
        };
    }

    input : ?HTMLInputElement

    hadnleEdit = () => {
        const input = this.input

        if (!input) {
            return
        }

        this.setState(
            {isEditing: true},
            () => {
                input.focus();
                const tmp = input.value;
                input.value = '';
                input.value = tmp;
            }
        );
    }

    handleInputChange = (event: SyntheticEvent<HTMLInputElement>) => {
        const target : HTMLInputElement = event.currentTarget;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const name = target.name;
    
        this.setState({
          [name]: value
        });
    }

    handleSave = () => {
        const value = this.state.editedValue
        if (value.length) {
            this.props.onTodoChange(this.props.id, this.state.editedValue)
            this.setState({isEditing: false})
        }
    }

    handleKeydown = (event: SyntheticKeyboardEvent<HTMLInputElement>) => {
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
                    ref={input => { this.input = input } }
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

export default TodoItem