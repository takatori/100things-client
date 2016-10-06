import { combineReducers } from 'redux'
import { routerReducer }   from 'react-router-redux'

import top from './reducers/top'

const rootReducer = combineReducers({
    top,
    routing: routerReducer
})

export default rootReducer
