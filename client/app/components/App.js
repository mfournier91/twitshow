const React = require('react')
const {getConfig} = require('../../../backend/config')
import {connect} from 'react-redux'
import {handleInitialData} from '../actions/shared'
class App extends React.Component {

    componentDidMount() {
        console.log(this.props)
        const {dispatch} = this.props

        dispatch(handleInitialData())
    }

    render() {
        const {tweets} = this.props
        console.log("merp", Object.keys(tweets))
        return (
            <div>
            Your Timeline:
            <ul>
                {Object.keys(tweets).map((key) => <li key={key}>TWEET ID:{key}</li>)}
            </ul>
    </div>
    )
    }
}

export default connect((state) => ({
    authedUser: state.authedUser,
    users: state.users,
    tweets: state.tweets
}))(App)