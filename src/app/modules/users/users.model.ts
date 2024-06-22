import { Schema, model } from 'mongoose'
import { IUSER } from './users.interface'

const userSchema = new Schema<IUSER>(
  {
    id: { type: String, required: true, unique: true },
    role: { type: String, required: true },
    password: { type: String, required: true },
  },
  { timestamps: true },
)

export const Users = model<IUSER>('users', userSchema)
