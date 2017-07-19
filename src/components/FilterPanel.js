import React from 'react';
import FilterHeader from './FilterHeader';
import FilterActions from './FilterActions';
import FilterList from './FilterList';

const FilterPanel = props => (
    <div className="FilterPanel">
        <FilterHeader title="Filters" helpText="Do you need help?" />
        <FilterList filters={[]} />
        <FilterActions />
    </div>
);

export default FilterPanel;
