const React = require('react')
const {getConfig} = require('../../../backend/config')
import {connect} from 'react-redux'
class App extends React.Component {
    state = {
        message: null
    }

    api = getConfig("backendUri")+"api"

    componentDidMount() {
        console.log(this.props)

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

export default connect((state) => ({
    authedUser: state.authedUser,
    users: state.users,
    tweets: state.tweets
}))(App)