import express from 'express'
import { UserModel } from '../models/models'

const routes = express.Router()

// Post Method
routes.post('/post', async (req, res) => {
  const data = new UserModel({
    name: req.body.name,
    age: req.body.age
  })

  try {
    const dataToSave = await data.save()
    res.status(200).json(dataToSave)
  }
  catch (error) {
    res.status(400).json({ message: error.message })
  }
})

// Get All Method
routes.get('/getAll', async (req, res) => {
  try {
    const data = await UserModel.find()
    res.json(data)
    res.status(200)
  } catch (error) {
    res.status(500).json({ message: error.message })
  }
})

// Get by ID Method
routes.get('/getOne/:id', async (req, res) => {
  try {
    const data = await UserModel.findById(req.params.id)
    res.json(data)
  }
  catch (error) {
    res.status(500).json({ message: error.message })
  }
})

// Update by ID Method
routes.patch('/update/:id', async (req, res) => {
  try {
    const id = req.params.id
    const updatedData = req.body
    const options = { new: true }

    const result = await UserModel.findByIdAndUpdate(
      id, updatedData, options
    )

    res.send(result)
  }
  catch (error) {
    res.status(400).json({ message: error.message })
  }
})

// Delete by ID Method
routes.delete('/delete/:id', async (req, res) => {
  try {
    const id = req.params.id
    const data = await UserModel.findByIdAndDelete(id)
    res.send(`Document with ${data.name} has been deleted...`)
  }
  catch (error) {
    res.status(400).json({ message: error.message })
  }
})

export default routes