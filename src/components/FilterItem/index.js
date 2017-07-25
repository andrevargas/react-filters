import React from 'react';
import Select from 'react-select';
import RemoveButton from '../RemoveButton';
import './styles.css';

const options = [
    { value: '!=', label: 'Not equals' }
];

const FilterItem = ({ filter, onRemove }) => (
    <div className="FilterItem">
        <div className="FilterItem__row">
            <div className="FilterItem__column FilterItem--field">
                <label className="FilterItem__label">Field</label>
                <input className="FilterItem__input" type="text" />
            </div>
            <div className="FilterItem__column FilterItem--operator">
                <label className="FilterItem__label">Operator</label>
                <Select options={options} />
            </div>
            <div className="FilterItem__column FilterItem--value">
                <label className="FilterItem__label">Value</label>
                <input className="FilterItem__input" type="text" />
            </div>
            <RemoveButton onClick={() => onRemove(filter.id)} />
        </div>
        <div className="clearfix" />
    </div>
);

export default FilterItem;
