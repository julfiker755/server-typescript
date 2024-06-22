import express, { Application, Request, Response } from 'express'
import cors from 'cors'
import router from './app/modules/users/users.route'
const app: Application = express()

// middleware
app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

console.log(app.get('env'))

// application route
app.use('/api/v1', router)
// define the route
app.get('/', (req: Request, res: Response) => {
  res.send('Hello World!')
})

export default app
