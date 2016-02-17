var express = require('express')
var bodyParser = require('body-parser')
var cors = require('cors')
var path = require('path')
var fs = require('fs')

var app = express()
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

app.get('/', function (req, res) {
  res.send('hello underworld')
})

app.listen(3000, function () {
  console.log('Triceratops Running on Port 3000!')
})
