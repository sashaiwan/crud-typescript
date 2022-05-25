import 'dotenv/config'
import express from 'express'
import mongoose from 'mongoose'

const app = express()
const port = 3000
const mongoString = process.env.DATABASE_URL

mongoose.connect(mongoString)
const database = mongoose.connection

database.on('error', (error) => {
  console.log(error)
})

database.once('connected', () => {
  console.log('Database connected')
})

app.get('/', (req, res) => {
  res.send('Hello world')
})

app.listen(port, () => {
  console.log(`app listening on port ${port}`)
})
