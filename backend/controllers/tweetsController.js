import Tweet from '../models/tweet'

module.exports = {
    getTweets: (req, res) => {
        Tweet.find((err, tweets) => {
            if (err) return res.json({ error: err });
            return res.json(tweets);
        })
    },
    toggleLikeTweet: (req, res) => {
      Tweet.findOne({_id: req.params['tweet_id']}, (err, tweet) => {
        
        if (err) return res.json({ error: err });
        if (!tweet) return res.status(404).send({error: 'No tweet found with id: ' + req.params.id})
        if (Object.keys(req.body).length === 0 && req.body.constructor === Object) return res.status(400).send({error: 'Bad request'})
        let { authedUser } = req.body;
        
        // TODO: find why tweet.likes.includes(authedUser) was always returning false
        tweet.likes = tweet.likes.filter((like) => like == authedUser).length > 0 ? tweet.likes.filter((like) => like && like != authedUser && like != null) : tweet.likes.filter((like) => like && like != null).concat(authedUser)
        tweet.save((err) => {
          if (err) return res.json({ error: err });
          return res.json({ message: 'Tweet updated' });
        })
      })
    }
}