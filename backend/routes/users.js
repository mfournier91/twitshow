const router = require('express').Router()
import usersController from '../controllers/usersController'

router.get('/', (req, res) => usersController.getUsers(req, res));

export default router