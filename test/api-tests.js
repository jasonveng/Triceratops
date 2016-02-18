var test = require('tape')
var request = require('supertest')

var server = require('../server/index.js')

test('GET /post', function(assert) {
  request(server)
  .get('/post')
  .expect('Content-Type'. /json)
  .expect(200)
  .end(function (err, res) {
    var expectedPost = [
      {
        "title": "cat",
        "post": "aioafweiofaoiwef",
        "id": "1"
      }
    ]
    var actualPost = res.body
    assert.error(err, 'No error')
    assert.same(actualPost, expectedPost, 'retrieve lists of posts')
    assert.end()

    post.forEach(function)
  }
})


