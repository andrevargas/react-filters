import React, { Component } from 'react';
import { connect } from 'react-redux';
import FilterPanel from '../components/FilterPanel';
import FilterHeader from '../components/FilterHeader';
import FilterList from '../components/FilterList';
import AddButton from '../components/AddButton';

import {
    addFilter,
    removeFilter,
    updateFilter
} from '../actions/filterActions';

class Filters extends Component {
    constructor() {
        super();
        this.addFilter = this.addFilter.bind(this);
        this.removeFilter = this.removeFilter.bind(this);
    }
    addFilter() {
        this.props.addFilter();
    }
    removeFilter(id) {
        this.props.removeFilter(id);
    }
    render() {
        return (
            <FilterPanel>
                <FilterHeader title="Filters" />
                <FilterList
                    filters={this.props.filters}
                    onRemoveFilter={this.removeFilter}
                />
                <AddButton onClick={this.addFilter} />
            </FilterPanel>
        );
    }
}

export default connect(
    state => ({ filters: state.filters }),
    { addFilter, removeFilter, updateFilter }
)(Filters);
