import React from 'react';
import { Provider } from 'react-redux';
import DevTools from './DevTools';
import Filters from './Filters';

const Root = ({ store }) => (
    <Provider store={store}>
        <div style={{ width: '60%', margin: '5%' }}>
            <Filters />
            <DevTools />
        </div>
    </Provider>
);

export default Root;
