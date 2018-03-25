import React from 'react';
import TodoListContainer from '../containers/TodoListContainer';
import TodoInput from '../containers/TodoInput';
import Filters from './Filters';

const App = () => (
    <div>
        <TodoInput />
        <Filters />
        <TodoListContainer />
    </div>
);

export default App;
