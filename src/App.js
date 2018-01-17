import React, { Component } from 'react';
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import 'todomvc-app-css/index.css'
import * as TodoActions from './actions/todos'

// components
import Main from './components/Main'
import Footer from './components/Footer'
import visibility from "./reducers/visibility";

const ENTER_KEY = 13

class App extends Component {
  state = {
    todoInput: '',
    toggleAll: false
  }

  handleChange = (event) => {
      const target = event.target;
      const value = target.type === 'checkbox' ? target.checked : target.value;
      const name = target.name;

      this.setState({
          [name]: value
      });
  }

  onToggleAllChange = () => {
      this.props.actions.toggleAllTodos(!this.props.allCompleted)
  }

  handleSubmit = (event) => {
    if (event.keyCode !== ENTER_KEY) {
      return
    }

    event.preventDefault()

    this.props.actions.addTodo(
      this.state.todoInput.trim()
    )

    this.setState({todoInput: ''})
  }

  onTodoChange = (id, value) => {
    this.props.actions.editTodo(id, value)
  }

  removeTodo = (id) => {
    this.props.store.dispatch()
  }

  render() {
    const { todos, visibility } = this.props
    const {editTodo} = this.props.actions

    return (
      <section className="todoapp">
        <header className="header">
          <h1>todos</h1>
          <input 
            className="new-todo" 
            placeholder="What needs to be done?"
            name="todoInput"
            value={this.state.todoInput}
            onChange={this.handleChange}
            onKeyDown={this.handleSubmit}
            autoFocus />
        </header>
        {/* This section should be hidden by default and shown when there are todos */}
        <Main
          toggleAll={this.allCompleted}
          onToggleAllChange={this.onToggleAllChange}
          todos={todos} 
          onTodoChange={editTodo}
          removeTodo={this.removeTodo}
          visibility={visibility}/>
        {/* This footer should hidden by default and shown when there are todos */}
        <Footer todos={todos} />
      </section>  
    );
  }
}

const mapStateToProps = state => ({
    todos: state.todos,
    allCompleted: state.todos.reduce((acc, todo) => acc && todo.completed, true),
    visibility: state.visibility
});

const mapDispatchToProps = dispatch => ({
    actions: bindActionCreators(TodoActions, dispatch)
});

App.propTypes = {
    todos: PropTypes.array.isRequired,
    visibility: PropTypes.string.isRequired
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
