import * as actions from './index';
import {
    ADD_TODO,
    REMOVE_TODO,
    TOGGLE_TODO,
    SET_VISIBILITY_FILTER,
    visibilityFilters,
} from './constants';

describe('action creators', () => {
    test('returns ADD_TODO action', () => {
        expect(actions.addTodo('Test todo')).toEqual({
            type: ADD_TODO,
            id: 0,
            text: 'Test todo',
        });
    });

    test('returns REMOVE_TODO action', () => {
        expect(actions.removeTodo(0)).toEqual({
            type: REMOVE_TODO,
            id: 0,
        });
    });

    test('returns TOGGLE_TODO action', () => {
        expect(actions.toggleTodo(0)).toEqual({
            type: TOGGLE_TODO,
            id: 0,
        });
    });

    test('returns SET_VISIBILITY_FILTER action', () => {
        expect(actions.setVisibilityFilter(visibilityFilters.DONE)).toEqual({
            type: SET_VISIBILITY_FILTER,
            filter: visibilityFilters.DONE,
        });
    });
});
