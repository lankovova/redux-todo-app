import { connect } from 'react-redux';
import { toggleTodo, removeTodo } from '../actions';
import { visibilityFilters } from '../actions/constants';
import TodoList from '../components/TodoList';

const getTodosByFilter = (todos, filter) => {
    switch (filter) {
        case visibilityFilters.AVAILABLE:
            return todos.filter(todo => !todo.done);
        case visibilityFilters.DONE:
            return todos.filter(todo => todo.done);
        default:
            return todos;
    }
};

const mapStateToProps = state => ({
    todos: getTodosByFilter(state.todos, state.visibilityFilter),
    allTodosAmount: state.todos.length,
});

const mapDispatchToProps = dispatch => ({
    toggleTodo: id => dispatch(toggleTodo(id)),
    removeTodo: id => dispatch(removeTodo(id)),
});

const TodoListContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(TodoList);

export default TodoListContainer;
