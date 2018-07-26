const router = require('express').Router()
import tweetsController from '../controllers/tweetsController'

router.get('/', (req, res) => tweetsController.getTweets(req, res));

export default router