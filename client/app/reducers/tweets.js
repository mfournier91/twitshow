import {RECEIVE_TWEETS, TOGGLE_LIKE} from "../actions/tweets";

export default function tweets(state = {}, action) {
    switch (action.type) {
        case RECEIVE_TWEETS:
            return {
                ...state,
                ...action.tweets
            }
        case TOGGLE_LIKE:

          return {
            ...state,
            [action.tweetId] : {
              ...state[action.tweetId],
              likes : action.hasLiked ? state[action.tweetId]['likes'].filter((like) => like != action.authedUser) : state[action.tweetId]['likes'].concat(action.authedUser)
            }
          }
        default:
            return state
    }
}