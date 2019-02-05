const express = require('express');
const exphbs = require('express-handlebars');

const app = express();

// Handlebars Middleware
app.engine('handlebars', exphbs({
    defaultLayout: 'main'
}));
app.set('view engine', 'handlebars');

//Index Route
app.get("/", (req, res) => {
    res.render('index');
});

// About Route
app.get("/about", (req, res) => {
    res.send("About");
});




const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
    console.log(`Server is Running on ${PORT}`);
})
