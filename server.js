// Import Express
const express = require('express')

// Create an Express app
const app = express()

//exercise one

// app.get('/', (req, res) => {
//     res.send("Hello");
//  });

// app.get('/greetings/:username', (req, res) => {
//     res.send(`<h1>What a delight it is to see you once more ${req.params.username}</h1>`)
// });

// exercise two
app.get('/roll/:number', (req, res) => {
    if (isNaN(req.params.number)) {
    res.send('you must specify a number!'); 
} else {
    let randomNumber = Math.floor(Math.random() * req.params.number)
    res.send(`You rolled a ${randomNumber}`)
}
});

// Listen for requests on port 3000
app.listen(3000, () => {
    console.log('Listening on port 3000')
  })
