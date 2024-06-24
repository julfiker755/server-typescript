import express from 'express'
import studentController from './student.controller'
const router = express.Router()

router.get('/get-student', studentController.getAllStudent)
router.get('/:studentId', studentController.singleStudent)
router.post('/create-student', studentController.createStudent)

export const Studentrouter = router
