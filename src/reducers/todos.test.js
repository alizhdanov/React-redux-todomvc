import todos from './todos'
import * as actions from '../actions/todos'

describe('todos', () => {
    test('Should add todo item', () => {
        const stateBefore = []
        const stateAfter = [{
            id: 0,
            value: 'test',
            completed: false
        }]



        const result = todos(stateBefore, actions.addTodo('test'));

        expect(result).toEqual(stateAfter)
    })

    test('Should toggle todo item', () => {
        const stateBefore = [
            {
                id: 0,
                value: 'test',
                completed: false
            }
        ]

        const stateAfter = [
            {
                id: 0,
                value: 'test',
                completed: true
            }
        ]

        const result = todos(stateBefore, {
            type: 'TOGGLE_TODO',
            id: 0,
        })

        expect(result).toEqual(stateAfter)
    })

    test('Should toggle all todo items', () => {
        const stateBefore = [
            { id: 0, value: 'test', completed: true},
            { id: 1, value: 'test', completed: true}
        ]

        const stateAfter = [
            { id: 0, value: 'test', completed: true},
            { id: 1, value: 'test', completed: true}
        ]

        const result = todos(stateBefore, {
            type: 'TOGGLE_ALL_TODOS',
            completed: true
        })

        expect(result).toEqual(stateAfter)
    })

    test('should change todo', () => {
        const stateBefore = [
            { id: 0, value: 'test', completed: false},
            { id: 1, value: 'test', completed: false}
        ]

        const stateAfter = [
            { id: 0, value: 'test', completed: false},
            { id: 1, value: 'tset', completed: false}
        ]

        const result = todos(stateBefore, {
            type: 'CHANGE_TODO',
            id: 1,
            value: 'tset'
        })

        expect(result).toEqual(stateAfter)
    })

    test('should remove todo item', () => {
        const stateBefore = [
            { id: 0, value: 'test', completed: false},
            { id: 1, value: 'test', completed: false},
            { id: 2, value: 'test', completed: false}
        ]

        const stateAfter = [
            { id: 0, value: 'test', completed: false},
            { id: 2, value: 'test', completed: false}
        ]

        const result = todos(stateBefore, {
            type: 'REMOVE_TODO',
            id: 1
        })

        expect(result).toEqual(stateAfter)
    })

    test('should remove completed todos', () => {
        const stateBefore = [
            { id: 0, value: 'test', completed: false},
            { id: 1, value: 'test', completed: true},
            { id: 2, value: 'test', completed: true}
        ]

        const stateAfter = [
            { id: 0, value: 'test', completed: false},
        ]

        const result = todos(stateBefore, actions.removeCompletedTodos())

        expect(result).toEqual(stateAfter)
    })
})