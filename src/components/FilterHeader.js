import React from 'react';

const FilterHeader = ({ title, helpText }) => (
    <div className="FilterHeader">
        <h3 className="FilterHeader__title">{title}</h3>
        <span className="FilterHeader__helpText">{helpText}</span>
    </div>
);

export default FilterHeader;
