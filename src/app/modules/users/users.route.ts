import express from 'express'
import usersController from './users.controller'
const router = express.Router()

router.get('/users/create-user', usersController.getUser)
router.post('/users/create-user', usersController.createUser)

export default router
