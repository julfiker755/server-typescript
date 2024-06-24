export type userName = {
  fastName: string
  middleName: string
  lastName: string
}

export type gardian = {
  fatherName: string
  fatherOccpation: string
  fatherContactNo: string
  motherName: string
  motherOccpation: string
  motherContactNo: string
}

export type Student = {
  id: string
  name: userName
  gender: 'male' | 'female'
  dateOfBirth: string
  email: string
  avatar?: string
  contactNo: string
  emergencycontactNo: string
  bloodGroup: 'A+' | 'A-' | 'B' | 'B+' | 'C' | 'D+'
  presentAddress: string
  parmanentAddress: string
  gardian: gardian
  isActive: 'Active' | 'isActive'
}
