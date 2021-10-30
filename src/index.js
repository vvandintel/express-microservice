require('dotenv').config()
const express = require('express')
const { Server } = require('socket.io')
const helmet = require('helmet')
const expressWinston = require('express-winston')
const winston = require('winston')
const http = require('http')
const app = express()
const server = http.createServer(app)
const io = new Server(server)
const routes = require('./routes')

app.use(helmet())
app.use(express.json())
app.use(expressWinston.logger({
    transports: [
        new winston.transports.Console()
    ],
    format: winston.format.combine(
        winston.format.colorize(),
        winston.format.json()
    )
}))
app.get('/', routes.helloRoute)
app.get('/daily-forecast', routes.dailyForecast)

io.on('connection', (socket) => {
    console.log('a user connected')
})

// Run the server!
const start = async () => {
    try {
        await app.listen(process.env.PORT || 5000, process.env.host || '0.0.0.0')
    } catch (err) {
        console.log(err)
        process.exit(1)
    }
}

start()