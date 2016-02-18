var $ = require('jquery')

function appendPosts(posts) {
	posts.forEach((post){
		$('.blog').append('<article><h2>'post.title'</h2><p>'post.post-content'</p></article>')
	})
}


