// Import Express
const express = require('express')

// Create an Express app
const app = express()

app.get('/', (req, res) => {
    res.send("Hello");
 });

app.get('/greetings/:username', (req, res) => {
    res.send(`<h1>What a delight it is to see you once more ${req.params.username}</h1>`)
});


app.get('/roll/:number', (req, res) => {
const randomNumber = Math.floor(Math.random() * (req.params.randomNumber + 1))
res.send(`You rolled a ${randomNumber}</h1>`)
});


// Listen for requests on port 3000
app.listen(3000, () => {
    console.log('Listening on port 3000')
  })
