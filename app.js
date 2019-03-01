const express = require('express');
const app = express();

// How middleware works
app.use(function(req, res, next) {
    console.log(Date.now());
});

// Index Route
app.get('/', (req, res) => {
    res.send("Working fine!");
});

// About Route
app.get('/about', (req, res) => {
    res.send('About');
})

const PORT = process.env.port || 3000;

app.listen(PORT, function() {
    console.log(`App is Running at ${PORT}`);
})