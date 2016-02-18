var test = require('tape')
var request = require('supertest')

var server = require('../server/index.js')

test('GET /', function(t) {
  request(server)
  .get('/')
  .expect('Content-Type', /json)
  .expect(200)
  .end(function (err, res) {
    var expectedPost = {
  "post": [
    {
      "title": "Donald Trump",
      "post-content": "Make America great again!!!!!",
      "id": 1
    },
    {
      "title": "House of Card",
      "post-content": "House of Card is the best tv show right now",
      "id": 2
    },
    {
      "title": "javascript",
      "post-content": "javascript is great",
      "id": 3
    }
  ]
}
    var actualPost = res.body
    t.error(err, 'No error')
    t.same(actualPost, expectedPost, 'retrieve lists of posts')
    t.end()

    post.forEach(function)
  }
})


