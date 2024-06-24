import { Student } from './student.interface'
import { StudentsModel } from './student.model'

const getAllStudentDB = async () => {
  const result = await StudentsModel.find({})
  return result
}

const singleStudentDB = async (id: string) => {
  const result = await StudentsModel.findOne({ id })
  return result
}

const createStudentDB = async (student: Student) => {
  const result = await StudentsModel.create(student)
  return result
}

export default {
  createStudentDB,
  getAllStudentDB,
  singleStudentDB,
}
