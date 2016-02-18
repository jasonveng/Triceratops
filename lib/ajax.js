var request = require('superagent')
var path = require('path')

function postFromServer (callBack) {
  request
  .get('http://localhost:3000/')
  .end(callBack)
}

function postToServer (object, callBack) {
  request
  .post('http://localhost:3000/')
  .send(object)
  .end(callBack)
}

module.exports = {
  'postFromServer': postFromServer,
  'postToServer': postToServer
}

// module.exports = function postToServer (title, date, postcontent, callBack) {
//   request
//   .post('http://localhost:3000/')
//   .send({"title": title, "date": date, "postcontent": postcontent})
//   .end(callBack)
// }

