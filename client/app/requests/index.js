const {getConfig} = require('../../../backend/config');

const api = getConfig("backendUri")+"api"




export default {
    getInitialData: () => {
        const urls = [`${api}/users`,`${api}/tweets`]
        var promises = urls.map(url => fetch(url).then(data => data.json()));
        return Promise.all(promises)
    },
    putToggleLikeTweet: (tweet_id,authedUser) => {
      const method = 'PUT'
      const body = JSON.stringify({authedUser})
      const headers = {"Content-Type": "application/json"}
      return fetch(`${api}/tweets/toggle_like/${tweet_id}`, {
        method,
        body,
        headers
       }).then((response) => response.json())
    }
}