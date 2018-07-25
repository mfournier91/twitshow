const router = require('express').Router()
import tweetsController from '../controllers/tweetsController'

router.get('/', (req, res) => tweetsController.getJelloWorld(req, res));

export default router