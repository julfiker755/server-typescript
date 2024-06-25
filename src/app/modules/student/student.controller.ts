import { Request, Response } from 'express'
import studentService from './student.service'
import studentSchema from './student.validation'

const getAllStudent = async (req: Request, res: Response) => {
  try {
    const result = await studentService.getAllStudentDB()
    res.status(200).json({
      success: true,
      message: 'Student get successfull',
      data: result,
    })
  } catch (err) {
    res
      .status(400)
      .json({ success: false, message: 'Student data not get success' })
  }
}

const singleStudent = async (req: Request, res: Response) => {
  try {
    const id = req.params.studentId
    const result = await studentService.singleStudentDB(id)
    res.status(200).json({
      success: true,
      message: 'Single Student successfull',
      data: result,
    })
  } catch (err) {
    res
      .status(400)
      .json({ success: false, message: 'Single Student is not success' })
  }
}

const createStudent = async (req: Request, res: Response) => {
  try {
    const student = req.body
    // validate data for jai
    const { error, value } = studentSchema.validate(student)

    const result = await studentService.createStudentDB(value)
    res.status(200).json({
      success: true,
      message: 'Student create successfull',
      data: result,
    })

    if (error) {
      res.status(400).json({
        success: false,
        message: 'Student not success',
        error: error.details,
      })
    }
  } catch (err) {
    let errorMessage = 'An error occurred'
    if (err instanceof Error) {
      errorMessage = err.message
    }
    res.status(400).json({
      success: false,
      message: 'Student not success',
      error: errorMessage.toString(),
    })
  }
}

export default {
  createStudent,
  getAllStudent,
  singleStudent,
}
