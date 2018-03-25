import React from 'react';
import { connect } from 'react-redux';
import { addTodo } from '../actions';

const mapDispatchToProps = dispatch => ({
    addTodo: todo => dispatch(addTodo(todo)),
});

class TodoInput extends React.Component {
    constructor(props) {
        super(props);
        this.state = { value: '' };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(e) {
        this.setState({ value: e.target.value });
    }

    handleSubmit(e) {
        e.preventDefault();

        if (!this.state.value.trim()) return;

        this.props.addTodo(this.state.value);
        this.setState({ value: '' });
    }

    render() {
        const { value } = this.state;
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <input
                        type="text"
                        name="todo"
                        id="todoInput"
                        value={value}
                        onChange={this.handleChange}
                    />
                    <button type="submit">
                        Add Todo
                    </button>
                </form>
            </div>
        );
    }
}

export default connect(null, mapDispatchToProps)(TodoInput);
