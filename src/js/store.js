import { applyMiddleware, compose, createStore } from 'redux';

// middlewares
import APIMiddleware   from './middleware/api';
import Thunk           from 'redux-thunk';

import rootReducer     from './rootReducer';

const finalCreateStore = compose(
    applyMiddleware(Thunk, APIMiddleware)
)(createStore);

export default finalCreateStore(rootReducer);
