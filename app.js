const express = require('express'); 

const app = express(); 

const path = require('path')
const publicPath = path.resolve(__dirname, './public')

const port = process.env.port || 3002;

app.use(express.static(publicPath))

app.listen(port, ()=>{
    console.log('la pagina esta funcionando');
})

app.get('/', (req, res)=>{
    res.sendFile(path.resolve(__dirname, './views/index.html'))
})

app.get('/crea-tu-cuenta', (req,res)=>{
    res.sendFile(path.resolve(__dirname, './views/register.html'))
})

app.get('/ingresa', (req,res)=>{
    res.sendFile(path.resolve(__dirname, './views/login.html'))
})

