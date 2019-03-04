const express = require('express')
const criptografar = require('./criptografar')
const app = express()

app.listen(3000, function(){
    console.log(criptografar())
})

app.get('/', (req, res)=>{
    res.render('index')
})

app.set('view engine', 'ejs')