const express = require('express')
const router = express.Router()
const { PrismaClient } = require('@prisma/client')

const prisma = new PrismaClient()

router.get('/notas', async (req, res) => {
  try {
    const notes = await prisma.nota.findMany({
      orderBy: { date: 'desc' }
    })
    return res.status(200).json(notes)
  } catch (error) {
    console.log(error)
    await prisma.$disconnect()
    return res.status(400).json('Não foi possivel obter as notas')
  }
})

router.post('/notas', async (req, res) => {
  try {
    const { title, description } = req.body
    const note = await prisma.nota.create({
      data: { title, description }
    })
    return res.status(201).json(note)
  } catch (error) {
    console.log(error)
    await prisma.$disconnect()
    return res.status(400).json('Não foi possivel criar essa nota')
  }
})

router.put('/notas/:id', (req, res) => {
  res.json(`Editar nota ${req.params.id}`)
})

router.delete('/notas/:id', (res, req) => {
  res.json(`Excluir nota ${req.params.id}`)
})

module.exports = router
