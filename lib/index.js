var $ = require('jquery')

function appendPosts(postsFromServer) {
	$(function () {
		$('.blog').append('<article><h2>title</h2><p>content</p></article>')
	})
}



