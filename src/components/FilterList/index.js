import React from 'react';
import FilterItem from '../FilterItem';

const FilterList = ({ filters, onRemoveFilter }) => (
    <div className="FilterList">
        {filters.map(item =>
            <FilterItem filter={item} key={item.id} onRemove={onRemoveFilter} />
        )}
    </div>
);

export default FilterList;
