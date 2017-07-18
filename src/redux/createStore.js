import { createStore, applyMiddleware } from 'redux';
import { createLogger } from 'redux-logger';
import rootReducer from './modules/filters';

export default initialState => {

    const middleware = [];

    if (process.env.NODE_ENV !== 'production') {
        middleware.push(createLogger());
    }

    return createStore(
        rootReducer,
        initialState,
        ...applyMiddleware(...middleware)
    );

};
