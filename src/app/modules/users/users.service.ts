import { IUSER } from './users.interface'
import { Users } from './users.model'

const createUser = async (user: IUSER): Promise<IUSER | null> => {
  const createuser = await Users.create(user)
  if (!createuser) {
    throw new Error('User create not found !!!')
  }
  return createuser
}

const getUser = async (): Promise<IUSER | null | unknown> => {
  const getuser = await Users.find({})
  return getuser
}

export default { createUser, getUser }
