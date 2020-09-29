const express = require('express')
const { Sequelize, DataTypes } = require('sequelize')
const Funcionario = require('./models/funcionario')

const morgan = require('morgan')

const app = express()
const sequelize = new Sequelize({ dialect: 'sqlite', storage: './funcionario-list.db' })
const funcionario = Funcionario(sequelize, DataTypes)

// Morgan, log de requisições!
app.use(morgan('dev'))

// We need to parse JSON coming from requests
app.use(express.json())

// List funcionario
app.get('/funcionario', async (req, res) => {
  const funcionarioList = await funcionario.findAll()

  res.json({ funcionario: funcionarioList })
})

// Create funcionario
app.post('/funcionario', async (req, res) => {
  const body = req.body
  const funcionario = await funcionario.create(body)

  res.json({ funcionario })
})

// Show funcionario
app.get('/funcionario/:id', async (req, res) => {
  const funcionarioId = req.params.id
  const funcionario = await funcionario.findByPk(funcionarioId)

  res.send({ funcionario })
})

// Update funcionario
app.put('/funcionario/:id', async (req, res) => {
  const funcionarioId = req.params.id
  const body = req.body
  const funcionario = await funcionario.findByPk(funcionarioId)

  if (funcionario) {
    await funcionario.update({ ...body })
    res.send({ funcionario })
  } else {
    res.status(404)
    res.send({ message: 'funcionario não encontrado' })
  }
})

// Delete funcionario
app.delete('/funcionario/:id', async (req, res) => {
  const funcionarioId = req.params.id
  const funcionario = await funcionario.findByPk(funcionarioId)

  if (funcionario) {
    await funcionario.destroy()
    res.send({ funcionario })
  } else {
    res.status(404)
    res.send({ message: 'funcionario não encontrado' })
  }
})

app.listen(3000, () => {
  console.log('ExpressJS iniciado na porta 3000')
})
