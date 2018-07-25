const router = require('express').Router()
import usersController from '../controllers/usersController'

router.get('/', (req, res) => usersController.getJelloWorld(req, res));

export default router