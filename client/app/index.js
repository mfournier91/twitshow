const React = require('react')
const ReactDom = require('react-dom')
require('whatwg-fetch')
require('./index.css')
import App from './components/App'
import {Provider} from 'react-redux'
import {createStore} from 'redux'
import reducer from './reducers'


const store = createStore(reducer)

console.log(store.getState())

ReactDom.render(
    <Provider store={store}>
        <App/>
    </Provider>,
    document.getElementById('app'))