const express = require('express');
const path = require('path');
const app = express();

app.use(express.static('public'));

app.get('/', (req, res) => {
    res.sendFile(path.resolve(__dirname, './views/home.html'));
})

app.get('/register', (req, res) => {
    res.sendFile(path.resolve(__dirname, './views/register.html'));
})

/*app.post('/home', (req, res) => {
    res.send('Recibi un formulario')
})*/

app.get('/login', (req, res) => {
    res.sendFile(path.resolve(__dirname, './views/login.html'));
})

app.listen(process.env.PORT || 3000, () => {
    console.log('Servidor corriendo en el puerto 3000');
})
