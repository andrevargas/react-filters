import React from 'react';
import FilterHeader from './FilterHeader';
import FilterActions from './FilterActions';
import FilterList from './FilterList';

const FilterPanel = props => (
    <div className="FilterPanel">
        <FilterHeader />
        <FilterList filters={[]} />
        <FilterActions />
    </div>
);

export default FilterPanel;
