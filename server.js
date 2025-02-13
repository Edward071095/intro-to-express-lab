// Import Express
const express = require('express')

// Create an Express app
const app = express()

const collectibles = [
    { name: 'shiny ball', price: 5.95 },
    { name: 'autographed picture of a dog', price: 10 },
    { name: 'vintage 1970s yogurt SOLD AS-IS', price: 0.99 }
  ];

  const shoes = [
    { name: "Birkenstocks", price: 50, type: "sandal" },
    { name: "Air Jordans", price: 500, type: "sneaker" },
    { name: "Air Mahomeses", price: 501, type: "sneaker" },
    { name: "Utility Boots", price: 20, type: "boot" },
    { name: "Velcro Sandals", price: 15, type: "sandal" },
    { name: "Jet Boots", price: 1000, type: "boot" },
    { name: "Fifty-Inch Heels", price: 175, type: "heel" }
];


//exercise one

// app.get('/', (req, res) => {
//     res.send("Hello");
//  });

// app.get('/greetings/:username', (req, res) => {
//     res.send(`<h1>What a delight it is to see you once more ${req.params.username}</h1>`)
// });

// exercise two
// app.get('/roll/:number', (req, res) => {
//     if (isNaN(req.params.number)) {
//     res.send('you must specify a number!'); 
// } else {
//     let randomNumber = Math.floor(Math.random() * req.params.number)
//     res.send(`You rolled a ${randomNumber}`)
// }
// });

//exercise 3
// app.get('/collectibles/:index', (req, res) => {
//     if (!collectibles[req.params.index]) {
//         res.send('This item is not yet in stock. Check back soon!')
//     } else {
//         res.send(`So, you want the shiny ball ${collectibles[req.params.index].name}? For ${collectibles[req.params.index].price}, it can be yours!`)
//     }
//     res.send(req.params.index)
// });

//exercise 4

app.get('/shoes', (req, res) => {
    if (req.query['min-price']) {
       const expensiveShoes = shoes.filter(shoe => shoe.price > req.query['min-price']);
        res.send(expensiveShoes); 
    } else if (req.query['max-price']) {
        const cheapShoes = shoes.filter(shoe => shoe.price < req.query['max-price']);
        res.send(cheapShoes)
    } else if (req.query.type) {
        const shoesOfAType = shoes.filter(shoe => shoe.type === req.query.type);
        res.send(shoesOfAType)
    } else {
        res.send(shoes);
    }
});



// Listen for requests on port 3000
app.listen(3000, () => {
    console.log('Listening on port 3000')
  })
