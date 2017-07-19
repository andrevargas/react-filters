import React from 'react';
import { Provider } from 'react-redux';
import DevTools from './DevTools';
import FilterPanel from '../components/FilterPanel';

const Root = ({ store }) => (
    <Provider store={store}>
        <div>
            <FilterPanel />
            <DevTools />
        </div>
    </Provider>
);

export default Root;
