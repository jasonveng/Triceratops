var request = require('superagent')
var path = require('path')

module.exports = function postFromServer (callBack) {
  request
  .get('http://localhost:3000/')
  .end(callBack)
}

module.exports = function postToServer (title, postcontent, callBack) {
  request
  .post('http://localhost:3000/')
  .send({"title": title, "postcontent": postcontent})
  .end(callBack)
}