const router = require('express').Router()
import tweetsController from '../controllers/tweetsController'

router.get('/', (req, res) => tweetsController.getTweets(req, res));
router.put('/toggle_like/:tweet_id', (req, res) => tweetsController.toggleLikeTweet(req, res));

export default router