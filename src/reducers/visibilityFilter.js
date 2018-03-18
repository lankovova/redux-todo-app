import {
    visibilityFilters,
    SET_VISIBILITY_FILTER,
} from '../actions/constants';

function visibilityFilter(state = visibilityFilters.ALL, action) {
    if (action.type === SET_VISIBILITY_FILTER) {
        return action.filter;
    }
    return state;
}

export default visibilityFilter;
