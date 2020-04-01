const express = require('express')
const api = require('./api/api')
const cors = require('cors')

const server = express()

const development = process.env.NODE_ENV === 'dev'

if (development) server.use(cors())
else server.use(express.static(__dirname + '/../build'))

server.use(express.json())
server.use('/api', api)

server.listen(8000, () => {
  console.log('listening on localhost:8000')
})
