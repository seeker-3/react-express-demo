const { Router } = require('express')

const api = Router()

api.get('/', (req, res) => {
  res.send('api working!')
})

api.post('/', (req, res) => {
  res.send(req.body.data)
})

module.exports = api
