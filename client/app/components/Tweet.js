const React = require('react')
import {connect} from 'react-redux'
import {formatTweet} from '../helpers'
import {formatDate} from '../helpers'
import {TiArrowBackOutline} from 'react-icons/ti/'
import {TiHeartOutline} from 'react-icons/ti/'
import {TiHeartFullOutline} from 'react-icons/ti/'
import {toggleTweet} from '../actions/tweets'

class Tweet extends React.Component {
  handleLike = (e, tweetId, hasLiked, authedUser) => {
    e.preventDefault()
     // todo: Handle Like Tweet
     console.log(tweetId, hasLiked, authedUser)
     let {dispatch} = this.props
     dispatch(toggleTweet(tweetId, hasLiked, authedUser))
  }
  toParent = (e, id) => {
    e.preventDefault()
    // todo: Redirect to parent Tweet.
  }
  render() {
    const { tweet, authedUser } = this.props
     if (tweet === null) {
      return <p>This Tweet does not exist</p>
    }
    const {
      name, avatar, timestamp, text, hasLiked, likes, replies, parent
    } = tweet
    return (
      <div className='tweet'>
        <img
          src={avatar}
          alt={`Avatar of ${name}`}
          className='avatar'
        />
        <div className='tweet-info'>
          <div>
            <span>{name}</span>
            <div>{formatDate(timestamp)}</div>
            {parent && (
              <button className='replying-to' onClick={(e) => this.toParent(e, parent.id)}>
                Replying to @{parent.author}
              </button>
            )}
            <p>{text}</p>
          </div>
          <div className='tweet-icons'>
            <TiArrowBackOutline className='tweet-icon' />
            <span>{replies !== 0 && replies}</span>
            <button className='heart-button' onClick={(e) => this.handleLike(e, tweet.id, hasLiked, authedUser)}>
              {hasLiked === true
                ? <TiHeartFullOutline color='#e0245e' className='tweet-icon' />
                : <TiHeartOutline className='tweet-icon'/>}
            </button>
            <span>{likes !== 0 && likes}</span>
          </div>
        </div>
      </div>
    )
  }
}

function mapStateToProps({authedUser, users, tweets}, {id}){
  const tweet = tweets[id]
  const parentTweet = tweet ? tweets[tweet.replyingTo] : null
  return {
    authedUser,
    tweet : tweet
      ? formatTweet(tweet, users[tweet.author], authedUser, parentTweet)
      : null
  }
}

export default connect(mapStateToProps)(Tweet)