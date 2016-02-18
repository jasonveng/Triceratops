var test = require('tape')
var postFromServer = require('../lib/ajax.js')

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

test('test if post from server', function(t) {
  postFromServer(function (err, res) {
  if (err) { console.log('ERROR testing get'); return }
  actualPost = JSON.parse(res.text)
  t.deepEqual(actualPost, expectedPost, "postFromServer sucessfully returned expected data")
  t.end()
  })
})
