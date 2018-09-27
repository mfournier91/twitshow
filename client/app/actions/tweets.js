import requests from '../requests/index'

export const RECEIVE_TWEETS = 'RECEIVE_TWEETS'
export const TOGGLE_LIKE = 'TOGGLE_LIKE'

const {putToggleLikeTweet} = requests

export function receiveTweets(tweets) {
    return {
        type: RECEIVE_TWEETS,
        tweets,
    }
}

export function toggleTweet(tweetId, hasLiked, authedUser) {
  return {
    type: TOGGLE_LIKE,
    tweetId,
    hasLiked,
    authedUser
  }
}

export function handleToggleTweet(tweetId, hasLiked, authedUser){
  return (dispatch) => {
    dispatch(toggleTweet(tweetId, hasLiked, authedUser))
    putToggleLikeTweet(tweetId, authedUser).then((response) => console.log(response))
      .catch((err) => {
        dispatch(toggleTweet(tweetId, !hasLiked, authedUser))
      })
  }
}