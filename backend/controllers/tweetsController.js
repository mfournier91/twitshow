import Tweet from '../models/tweet'

module.exports = {
    getTweets: (req, res) => {
        Tweet.find((err, tweets) => {
            if (err) return res.json({ error: err });
            return res.json(tweets);
        })
    }
}