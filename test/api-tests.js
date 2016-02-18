var test = require('tape')
var request = require('supertest')

var server = require('../server/index.js')

test('GET /post', function(t) {
  request(server)
  .get('/post')
  .expect('Content-Type'. /json)
  .expect(200)
  .end(function (err, res) {
    var expectedPost = [
      {
        "title": "Donald Trump",
        "post-content": "Make America great again!!!!!",
        "id": 1
      }
    ]
    var actualPost = res.body
    t.error(err, 'No error')
    t.same(actualPost, expectedPost, 'retrieve lists of posts')
    t.end()

    post.forEach(function)
  }
})


