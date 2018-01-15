import todos from './todos'

describe('todos', () => {
    test('Should add todo item', () => {
        const stateBefore = []
        const stateAfter = [{
            id: 0,
            value: 'test',
            completed: false
        }]

        const result = todos(stateBefore, {
            type: 'ADD_TODO',
            id: 0,
            value: 'test',
            completed: false
        })

        expect(result).toEqual(stateAfter)
    })

    test('Shoud toggle todo item', () => {
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
})