import React from 'react';
import PropTypes from 'prop-types';
import Todo from './Todo';

const TodoList = ({
    todos,
    allTodosAmount,
    toggleTodo,
    removeTodo,
}) => (
    <div>
        <div>Showed {todos.length} of {allTodosAmount}</div>
        <ul>
            {
                todos.map(todo => (
                    <Todo
                        key={todo.id}
                        {...todo}
                        onToggleClick={() => toggleTodo(todo.id)}
                        onRemoveClick={() => removeTodo(todo.id)}
                    />
                ))
            }
        </ul>
    </div>
);

TodoList.propTypes = {
    todos: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.number.isRequired,
        done: PropTypes.bool.isRequired,
        text: PropTypes.string.isRequired,
    }).isRequired).isRequired,
    allTodosAmount: PropTypes.number.isRequired,
    toggleTodo: PropTypes.func.isRequired,
    removeTodo: PropTypes.func.isRequired,
};

export default TodoList;
