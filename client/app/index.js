const React = require('react')
const ReactDom = require('react-dom')
const {getConfig} = require('../../backend/config')
require('whatwg-fetch')
require('./index.css')

class App extends React.Component {
    state = {
        message: null
    }

    api = getConfig("backendUri")+"api"

    componentDidMount() {
        // fetch(getConfig("backendUri")+"api").then((data) => data.json())
        //     .then(res => this.setState({
        //         message:res.message[0].message
        //     }))


        // Promise.all([fetch(`${this.api}/users`), fetch(`${this.api}/tweets`)])
        //     .then(([users, tweets]) => [users.json(), tweets.json()])
        //     .then((res) => {debugger; return this.setState({
        //         message: users.users[0].name + tweets.tweets[0].text
        //     })})

        const urls = [`${this.api}/users`,`${this.api}/tweets`]

        var promises = urls.map(url => fetch(url).then(data => data.json()));
        Promise.all(promises).then(([users, tweets]) => {
            // do something with results.
            this.setState({
                message: `${users[0].name}: ${tweets[0].text}`
            })
        });


    }

    render() {
        const {message} = this.state
        return (
            <div>
            {message || 'Loading'}
            </div>
        )
    }
}

ReactDom.render(<App/>, document.getElementById('app'))