import React, { Component } from 'react';
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import 'todomvc-app-css/index.css'
import * as TodoActions from './actions/todos'

// components
import Main from './components/Main'
import Footer from './components/Footer'

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

  onToggleAllChange = (event) => {
      const val = event.target.checked
      this.setState({toggleAll: val})
      this.props.actions.toggleAllTodos(val)
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
    const todos = this.props.todos
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
          toggleAll={this.state.toggleAll}
          onToggleAllChange={this.onToggleAllChange}
          todos={todos} 
          onTodoChange={editTodo}
          removeTodo={this.removeTodo} />
        {/* This footer should hidden by default and shown when there are todos */}
        <Footer todos={todos} />
      </section>  
    );
  }
}

const mapStateToProps = state => ({
  todos: state.todos
})

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators(TodoActions, dispatch)
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
