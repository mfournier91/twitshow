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
        if (!tweet) return res.json({error: 'No tweet found with id: ' + req.params.id})
        let { authedUser } = req.body;
        
        
        //tweet.likes = []
        // TODO: find why tweets.likes.includes(authedUser) was always returning false
        tweet.likes = tweet.likes.filter((like) => like == authedUser).length > 0 ? tweet.likes.filter((like) => like != authedUser) : tweet.likes.concat(authedUser)
        tweet.save((err) => {
          if (err) return res.json({ error: err });
          return res.json({ message: 'Tweet updated' });
        })
      })
    }
}