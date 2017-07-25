import React from 'react';
import FilterHeader from '../FilterHeader';
import FilterList from '../FilterList';
import AddButton from '../AddButton';
import './styles.css';

const FilterPanel = ({ children }) => (
    <div className="FilterPanel">
        {children}
    </div>
);

export default FilterPanel;
