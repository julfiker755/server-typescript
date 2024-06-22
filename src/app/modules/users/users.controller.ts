import { Request, Response } from 'express'
import userService from './users.service'

const createUser = async (req: Request, res: Response) => {
  try {
    const user = req.body
    const result = await userService.createUser(user)
    res.status(200).json({
      success: true,
      message: 'users create successfull',
      data: result,
    })
  } catch (err) {
    res.status(400).json({ success: false, message: 'user create not success' })
  }
}

const getUser = async (req: Request, res: Response) => {
  try {
    const result = await userService.getUser()
    res
      .status(200)
      .json({ success: true, message: 'user get successfull', data: result })
  } catch (err) {
    res.status(400).json({ success: false, message: 'get user not found' })
  }
}

export default {
  createUser,
  getUser,
}
