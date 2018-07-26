import tweetRoutes from './tweets'
import userRoutes from './users'
const router = require('express').Router()

router.use("/tweets", tweetRoutes)
router.use("/users", userRoutes)

export default router