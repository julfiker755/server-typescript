import { Schema, model } from 'mongoose'
import { gardian, Student, userName } from './student.interface'

const nameSchema = new Schema<userName>({
  fastName: {
    type: String,
    required: [true, 'First name is required'],
  },
  middleName: {
    type: String,
    required: [true, 'Middle name is required'],
  },
  lastName: {
    type: String,
    required: [true, 'Last name is required'],
  },
})

const guardianSchema = new Schema<gardian>({
  fatherName: { type: String, required: [true, "Father's name is required"] },
  fatherOccpation: {
    type: String,
    required: [true, "Father's occupation is required"],
  },
  fatherContactNo: {
    type: String,
    required: [true, "Father's contact number is required"],
  },
  motherName: { type: String, required: [true, "Mother's name is required"] },
  motherOccpation: {
    type: String,
    required: [true, "Mother's occupation is required"],
  },
  motherContactNo: {
    type: String,
    required: [true, "Mother's contact number is required"],
  },
})

const studentSchema = new Schema<Student>(
  {
    id: { type: String, required: [true, 'ID is required'], unique: true },
    name: { type: nameSchema, required: [true, 'Name is required'] },
    gender: {
      type: String,
      enum: {
        values: ['male', 'female'],
        message: '{VALUE} is not supported',
      },
      required: [true, 'Gender is required'],
    },
    dateOfBirth: {
      type: String,
      required: [true, 'Date of birth is required'],
    },
    email: {
      type: String,
      required: [true, 'Email is required'],
    },
    avatar: { type: String, required: [true, 'Avatar is required'] },
    contactNo: { type: String, required: [true, 'Contact number is required'] },
    emergencycontactNo: {
      type: String,
      required: [true, 'Emergency contact number is required'],
    },
    bloodGroup: {
      type: String,
      enum: ['A+', 'A-', 'B', 'B+', 'C', 'D+'],
      message: '{VALUE} is not a valid blood group',
    },
    presentAddress: {
      type: String,
      required: [true, 'Present address is required'],
    },
    parmanentAddress: {
      type: String,
      required: [true, 'Permanent address is required'],
    },
    gardian: { type: guardianSchema, required: [true, 'Guardian is required'] },
    isActive: {
      type: String,
      enum: ['Active', 'Inactive'],
      default: 'Active',
      required: [true, 'Status is required'],
    },
  },
  { timestamps: true },
)

export const StudentsModel = model<Student>('Students', studentSchema)
