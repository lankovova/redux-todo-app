import { createStore } from 'redux';
import todoAppReducer from './reducers';
import {
    addTodo,
    removeTodo,
    toggleTodo,
    setVisibilityFilter,
} from './actions';
import { visibilityFilters } from './actions/constants';

const store = createStore(todoAppReducer);

const unsubscribe = store.subscribe(() => console.log(store.getState()));

store.dispatch(addTodo('Learn about actions'));
store.dispatch(addTodo('Learn about reducers'));
store.dispatch(addTodo('Learn about store'));
store.dispatch(setVisibilityFilter(visibilityFilters.DONE));
store.dispatch(removeTodo(2));
store.dispatch(toggleTodo(1));

unsubscribe();
