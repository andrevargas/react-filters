import { createStore, compose } from 'redux';
import rootReducer from '../reducers';
import DevTools from '../containers/DevTools';

export default initialState => {

    const enhancer = compose(
        DevTools.instrument()
    );

    return createStore(
        rootReducer,
        initialState,
        enhancer
    );

};
