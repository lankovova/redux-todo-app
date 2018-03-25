import React from 'react';
import PropTypes from 'prop-types';

const Todo = ({
    text,
    done,
    onToggleClick,
    onRemoveClick,
}) => (
    <li
        style={{ userSelect: 'none' }}
    >
        <div
            style={{ display: 'flex' }}
        >
            <div
                onClick={onToggleClick}
                style={{
                    textDecoration: done ? 'line-through' : 'none',
                    marginRight: '10px',
                    cursor: 'pointer',
                }}
                role="button"
                aria-hidden
            >
                {text}
            </div>
            <div
                onClick={onRemoveClick}
                style={{ cursor: 'pointer' }}
                role="button"
                aria-hidden
            >
                <i className="fas fa-trash-alt fa-sm" />
            </div>
        </div>
    </li>
);

Todo.propTypes = {
    text: PropTypes.string.isRequired,
    done: PropTypes.bool.isRequired,
    onToggleClick: PropTypes.func.isRequired,
    onRemoveClick: PropTypes.func.isRequired,
};

export default Todo;
