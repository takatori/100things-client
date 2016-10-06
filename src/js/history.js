import store from './store'
import { hashHistory } from 'react-router'
import { syncHistoryWithStore } from 'react-router-redux'
export default syncHistoryWithStore(hashHistory, store)
