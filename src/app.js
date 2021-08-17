const express = require('express');
const path = require('path');
const hbs = require('hbs');

const app = express();

//Define paths for express
const publicDirectoryPath = path.join(__dirname, "../public");
const viewsPath = path.join(__dirname, '../templates/views');
const partialsPath = path.join(__dirname, '../templates/partials');

//set up handle bars view engine and views location
app.set('views', viewsPath);
app.set('view engine', 'hbs');
hbs.registerPartials(partialsPath);

//setup static directory to serve
app.use(express.static(publicDirectoryPath));

app.get('', (req, res) => {

    res.render('index.hbs', {
        title: "LAIDBACK ANONYMOUS",
        webDeveloper: "Laidback Anonymous Comunity"

    });
});

app.get('/artwork', (req, res) => {

    res.render('artwork.hbs', {
        title: "LAIDBACK ANONYMOUS",
        webDeveloper: "Laidback Anonymous Comunity"
    });
});

app.get('/nothing', (req, res) => {

    res.render('nothing.hbs', {
        title: "LAIDBACK ANONYMOUS",
        webDeveloper: "Laidback Anonymous Comunity"

    });
});
app.get('/payment', (req, res) => {

    res.render('payment.hbs', {
        title: "LAIDBACK ANONYMOUS",
        webDeveloper: "Laidback Anonymous Comunity"
    });
});

app.get('/photography', (req, res) => {
    res.render('photography.hbs', {
        title: "LAIDBACK ANONYMOUS",
        webDeveloper: "Laidback Anonymous Comunity"
    });
});

app.get('/poetries', (req, res) => {
    res.render('poetries.hbs', {
        title: "LAIDBACK ANONYMOUS",
        webDeveloper: "Laidback Anonymous Comunity"
    });
});

app.get('/support', (req, res) => {
    res.render('support.hbs', {
        title: "LAIDBACK ANONYMOUS",
        webDeveloper: "Laidback Anonymous Comunity"
    });
});

app.get('/writings', (req, res) => {
    res.render('writings.hbs', {
        title: "LAIDBACK ANONYMOUS",
        webDeveloper: "Laidback Anonymous Comunity"
    });
});


app.get('/about', (req, res) => {
    if (!req.query.search) {
        return res.send({
            error: "provide search term"
        });
    }
    console.log("The given query :", req.query)
    res.send({ about: "This Is A Open Anonymous Creative Community" });
});

app.get('*', (req, res) => {
    res.render('404.hbs', {
        errorCode: 404,
        errorMessage: "For Some Reason The Page You Requested Could Not Be Found On Our Server",
        title: "LAIDBACK ANONYMOUS",
        webDeveloper: "Laidback Anonymous Comunity"
    });
});


app.listen(3000, () => {

    console.log("Server is up and running")
});