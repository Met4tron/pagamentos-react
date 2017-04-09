const port = 3003
const bodyParser = require('body-parser')
const express = require('express')
const server = express()
const cors = require('./cors')
const queryInt = require('express-query-int')

/**Middlewares**/

server.use(bodyParser.urlencoded({ extended: true }))
server.use(bodyParser.json())
server.use(cors)
server.use(queryInt())

server.listen(port, () => console.log(`BACKEND IS RUNNING ON PORT ${port}`))

module.exports = server