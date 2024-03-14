const express = require('express'); 

const app = express(); 

const path = require('path')
const publicPath = path.resolve(__dirname, './public')

app.use(express.static(publicPath))

app.listen(3002, ()=>{
    console.log('la pagina esta funcionando');
})

app.get('/', (req, res)=>{
    res.sendFile(path.resolve(__dirname, './views/index.html'))
})

app.get('/crea-tu-cuenta', (req,res)=>{
    res.sendFile(path.resolve(__dirname, './register.html'))
})