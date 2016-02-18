var express = require('express')
var bodyParser = require('body-parser')
var cors = require('cors')
var path = require('path')
var fs = require('fs')
var readFilePromise = require('./readFilePromise.js')

var app = express()

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

app.get('/', function (req, res) {
  readFilePromise(path.join(__dirname, '../data/db.json'))
    .then(function (data) {
      res.send(data)
    .error(function (err) {
      console.log('ERROR: returning data from "/"', err)
    })
  })
})

module.exports = app

