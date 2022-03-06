// Require needed modules.
const express = require('express')

// Initialize the app object.
const app = express()

// Create a homepage route.
app.get('/', (req, res) => {
    // This gets sent to the client 
    // (your web browser most likely!)
    res.send('Hello worlds!')
})

// Create a second route.
app.get('/second', (req, res) => {
    res.send('Whoooo! My Second Page!')
})

// Listen for connections.
app.listen(3000, function () {
    console.log('I am awake!')
})