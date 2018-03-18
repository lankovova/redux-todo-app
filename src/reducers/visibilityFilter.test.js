import visibilityFilter from './visibilityFilter';
import {
    visibilityFilters,
    SET_VISIBILITY_FILTER,
} from '../actions/constants';

describe('visibilityFilter reducer', () => {
    test('initialized with default ALL value', () => {
        expect(visibilityFilter(undefined, {})).toEqual(visibilityFilters.ALL);
    });

    test('should handle SET_VISIBILITY_FILTER action', () => {
        expect(visibilityFilter(undefined, {
            type: SET_VISIBILITY_FILTER,
            filter: visibilityFilters.DONE,
        })).toEqual(visibilityFilters.DONE);
    });
});
