import todos from './todos';
import {
    ADD_TODO,
    REMOVE_TODO,
    TOGGLE_TODO,
} from '../actions/constants';

describe('todos reducer', () => {
    test('initialized with empty array', () => {
        expect(todos(undefined, {})).toEqual([]);
    });

    test('should handle ADD_TODO action', () => {
        expect(todos([], {
            type: ADD_TODO,
            id: 0,
            text: 'Test todo',
        })).toEqual([
            {
                id: 0,
                text: 'Test todo',
                done: false,
            },
        ]);

        expect(todos([
            {
                id: 0,
                text: 'Test todo',
                done: false,
            },
        ], {
            type: ADD_TODO,
            id: 1,
            text: 'Next test todo',
        })).toEqual([
            {
                id: 0,
                text: 'Test todo',
                done: false,
            },
            {
                id: 1,
                text: 'Next test todo',
                done: false,
            },
        ]);
    });

    test('should handle REMOVE_TODO action', () => {
        expect(todos([
            {
                id: 0,
                text: 'Test todo',
                done: false,
            },
            {
                id: 1,
                text: 'Next test todo',
                done: false,
            },
        ], {
            type: REMOVE_TODO,
            id: 1,
        })).toEqual([
            {
                id: 0,
                text: 'Test todo',
                done: false,
            },
        ]);

        expect(todos([
            {
                id: 0,
                text: 'Test todo',
                done: false,
            },
        ], {
            type: REMOVE_TODO,
            id: 0,
        })).toEqual([]);
    });

    test('should handle TOGGLE_TODO action', () => {
        expect(todos([
            {
                id: 0,
                text: 'Test todo',
                done: false,
            },
        ], {
            type: TOGGLE_TODO,
            id: 0,
        })).toEqual([
            {
                id: 0,
                text: 'Test todo',
                done: true,
            },
        ]);

        expect(todos([
            {
                id: 0,
                text: 'Test todo',
                done: false,
            },
            {
                id: 1,
                text: 'Next test todo',
                done: false,
            },
        ], {
            type: TOGGLE_TODO,
            id: 0,
        })).toEqual([
            {
                id: 0,
                text: 'Test todo',
                done: true,
            },
            {
                id: 1,
                text: 'Next test todo',
                done: false,
            },
        ]);
    });
});

