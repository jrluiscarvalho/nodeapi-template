const express = require('express')
const mongoose = require('mongoose')
const requireDir = require('require-dir')

const app = express()
app.use(express.json())

mongoose.connect('mongodb://localhost:27017/nodeapi', {useNewUrlParser: true})

requireDir('./src/models')

app.listen(3003, () => {
    console.log('hello world')
})

app.use('/api', require('./src/routes'))