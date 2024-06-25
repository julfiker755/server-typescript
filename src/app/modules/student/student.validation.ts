import Joi from 'joi'

const nameSchema = Joi.object({
  fastName: Joi.string().alphanum().required().messages({
    'string.empty': 'First name is required',
    'string.alphanum': 'First name should contain only letters (a-zA-Z)',
  }),
  middleName: Joi.string().alphanum().required().messages({
    'string.empty': 'Middle name is required',
    'string.alphanum': 'Middle name should contain only letters (a-zA-Z)',
  }),
  lastName: Joi.string().alphanum().required().messages({
    'string.empty': 'Last name is required',
    'string.alphanum': 'Last name should contain only letters (a-zA-Z)',
  }),
})

const guardianSchema = Joi.object({
  fatherName: Joi.string().required().messages({
    'string.empty': "Father's name is required",
  }),
  fatherOccpation: Joi.string().required().messages({
    'string.empty': "Father's occupation is required",
  }),
  fatherContactNo: Joi.string().required().messages({
    'string.empty': "Father's contact number is required",
  }),
  motherName: Joi.string().required().messages({
    'string.empty': "Mother's name is required",
  }),
  motherOccpation: Joi.string().required().messages({
    'string.empty': "Mother's occupation is required",
  }),
  motherContactNo: Joi.string().required().messages({
    'string.empty': "Mother's contact number is required",
  }),
})

const studentSchema = Joi.object({
  id: Joi.string().required().messages({
    'string.empty': 'ID is required',
  }),
  name: nameSchema.required().messages({
    'any.required': 'Name is required',
  }),
  gender: Joi.string().valid('male', 'female').required().messages({
    'any.only': '{#value} is not supported',
    'string.empty': 'Gender is required',
  }),
  dateOfBirth: Joi.string().required().messages({
    'string.empty': 'Date of birth is required',
  }),
  email: Joi.string().email().required().messages({
    'string.empty': 'Email is required',
    'string.email': '{#value} is not a valid email',
  }),
  avatar: Joi.string().required().messages({
    'string.empty': 'Avatar is required',
  }),
  contactNo: Joi.string().required().messages({
    'string.empty': 'Contact number is required',
  }),
  emergencyContactNo: Joi.string().required().messages({
    'string.empty': 'Emergency contact number is required',
  }),
  bloodGroup: Joi.string()
    .valid('A+', 'A-', 'B+', 'B-', 'O+', 'O-', 'AB+', 'AB-')
    .messages({
      'any.only': '{#value} is not a valid blood group',
    }),
  presentAddress: Joi.string().required().messages({
    'string.empty': 'Present address is required',
  }),
  parmanentAddress: Joi.string().required().messages({
    'string.empty': 'Permanent address is required',
  }),
  gardian: guardianSchema.required().messages({
    'any.required': 'Guardian is required',
  }),
  isActive: Joi.string()
    .valid('Active', 'Inactive')
    .default('Active')
    .required()
    .messages({
      'any.only': 'Status is not valid',
      'string.empty': 'Status is required',
    }),
}).options({ abortEarly: false })

export default studentSchema
