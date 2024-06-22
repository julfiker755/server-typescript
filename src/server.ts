import mongoose from 'mongoose'
import app from './app'
const port: number = 8000
import config from './config/index'
import { Infologger, Errorlogger } from './shared/logger'

// database connection
async function main() {
  try {
    await mongoose.connect(config.database_url as string)
    Infologger.info('mongoose database connection success')
  } catch (err) {
    Errorlogger.error('mongoose database connecton not success')
  }
}
main()

app.listen(port, () => {
  Infologger.info(`app start ${port}`)
})
