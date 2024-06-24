import express, { Application, Request, Response } from 'express'
import cors from 'cors'
import { Studentrouter } from './app/modules/student/student.route'
const app: Application = express()

// middleware
app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

console.log(app.get('env'))

// application route system
app.use('/api/v1/student', Studentrouter)
// define the route
app.get('/', (req: Request, res: Response) => {
  res.send('Hello World!')
})

// not found route
app.all('*', (req: Request, res: Response) => {
  res.status(400).json({
    success: false,
    message: 'Route is not found',
  })
})

export default app
