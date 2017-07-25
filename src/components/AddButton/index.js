import React from 'react';
import './styles.css';

const AddButton = props => (
    <button className="AddButton" {...props}>
        <span className="AddButton__icon">➕</span>
        Add filter
    </button>
);

export default AddButton;
