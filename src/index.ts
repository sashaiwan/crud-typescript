import 'dotenv/config'
import express from 'express'
import mongoose from 'mongoose'

import routes from './routes/routes'

const app = express()
const port = 3000
const mongoString = process.env.DATABASE_URL

mongoose.connect(mongoString)
const database = mongoose.connection

app.use(express.json())
app.use('/api', routes)

database.on('error', (error) => {
  console.log(error)
})

database.once('connected', () => {
  console.log('Database connected')
})

app.listen(port, () => {
  console.log(`app listening on port ${port}`)
})