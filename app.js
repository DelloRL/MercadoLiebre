const path = require('path')
const express = require("express");
const app = express();

app.use(express.static("public"))

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '/views/home.html'))
})

app.get('/home', (req, res) => {
    res.sendFile(path.join(__dirname, '/views/home.html'))
})

app.get('/login', (req, res) => {
    res.sendFile(path.join(__dirname, '/views/login.html'))
})

app.get('/register', (req, res) => {
    res.sendFile(path.join(__dirname, '/views/register.html'))
})

app.listen(process.env.PORT || 3030, function () {
     console.log('Servidor Corriendo');
})


app.use(express.static('public'));