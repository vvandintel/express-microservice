require('dotenv').config()
const express = require('express')
const app = express()
const routes = require('./routes')
// require('./util').startTracing()

// Declare a route
app.get('/', routes.helloRoute)

// Run the server!
const start = async () => {
    try {
        await app.listen(process.env.PORT || 5000, process.env.host || '0.0.0.0')
    } catch (err) {
        process.exit(1)
    }
}

start()