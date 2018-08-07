const React = require('react')
const ReactDom = require('react-dom')
require('whatwg-fetch')
require('./index.css')
import App from './components/App'



ReactDom.render(<App/>, document.getElementById('app'))