import React from 'react';
import { visibilityFilters } from '../actions/constants';
import FilterLink from '../containers/FilterLink';

const Filters = () => (
    <div style={{ display: 'flex' }}>
        <span style={{ marginRight: '5px' }}>Show:</span>
        <FilterLink
            filter={visibilityFilters.ALL}
        >
            all
        </FilterLink>
        <FilterLink
            filter={visibilityFilters.AVAILABLE}
        >
            available
        </FilterLink>
        <FilterLink
            filter={visibilityFilters.DONE}
        >
            done
        </FilterLink>
    </div>
);

export default Filters;
