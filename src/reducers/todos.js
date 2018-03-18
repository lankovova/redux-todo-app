import {
    ADD_TODO,
    REMOVE_TODO,
    TOGGLE_TODO,
} from '../actions/constants';

function todos(state = [], action) {
    switch (action.type) {
        case ADD_TODO: {
            return [
                ...state,
                {
                    id: action.id,
                    text: action.text,
                    done: false,
                },
            ];
        }
        case REMOVE_TODO: {
            return state.filter(todo => action.id !== todo.id);
        }
        case TOGGLE_TODO: {
            return state.map((todo) => {
                if (todo.id === action.id) {
                    return Object.assign({}, todo, { done: !todo.done });
                }
                return todo;
            });
        }
        default: return state;
    }
}

export default todos;
