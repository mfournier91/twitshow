const React = require('react')

import {connect} from 'react-redux'
import {handleInitialData} from '../actions/shared'
import Dashboard from './Dashboard'
import NewTweet from './NewTweet'
import LoadingBar from 'react-redux-loading-bar'

class App extends React.Component {

    componentDidMount() {
        const {dispatch} = this.props

        dispatch(handleInitialData())
    }
    
    render() {
      return (
        <div>
        <LoadingBar />
        {this.props.loading ? null : <NewTweet/>}
        </div>
      )
    }
}

export default connect(({authedUser}) => ({
    loading: authedUser === null
}))(App)