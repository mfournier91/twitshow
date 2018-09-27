export const RECEIVE_TWEETS = 'RECEIVE_TWEETS'
export const TOGGLE_LIKE = 'TOGGLE_LIKE'

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