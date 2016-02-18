var $ = require('jquery')
var postFromServer = require('./ajax.js')

	function appendPosts(postFromServer) {
		postFromServer(appendCallback)
	}

	function appendCallback (data) {
		console.log(data)
		// $('.blog').append('<article><h2>'post.title'</h2><p>'post.post-content'</p></article>')
	}

