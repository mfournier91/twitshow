export const RECEIVE_TWEETS = 'RECEIVE_TWEETS'

export function receiveTweets(tweets) {
    return {
        id: RECEIVE_TWEETS,
        tweets,
    }
}