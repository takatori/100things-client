// react
import React from 'react'
import { render } from 'ract-dom'
import { Router, Route, IndexRoute } from 'react-router'

// redux
import { Provider } from 'react-redux'
import store        from './store'
import history      from './history'


// Apps
import App from './App'

// containers
import top from './containers/Top'

render(
    <Provider store={store}>
      <Router history={history}>
        <Router path="/" component={App}>
          <IndexRoute component={top} />
        </Router>
      </Router>
    </Provider>,
    document.querySelector('.app')
)
