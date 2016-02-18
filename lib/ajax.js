var request = require('superagent')
var path = require('path')

module.exports = function postFromServer (callBack) {
  request
  .get('http://localhost:3000/')
  .end(callBack)
}

function postToServer (callBack) {
  request
  .post('http://localhost:3000/')
  .end(callBack)
}
