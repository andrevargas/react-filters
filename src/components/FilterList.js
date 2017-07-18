import React from 'react';
import FilterItem from './FilterItem';

const FilterList = ({ filters }) => (
    <div className="FilterList">
        {filters.map(item => <FilterItem />)}
    </div>
);

export default FilterList;
