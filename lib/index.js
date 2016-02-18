var $ = require('jquery')
var postFromServer = require('./ajax.js')

	function appendPosts(postFromServer) {
		postFromServer(appendCallback)
	}

	function appendCallback (err, res) {
		// console.log(typeof res.text);
		var parsedData = JSON.parse(res.text)
		// console.log(parsedData.post[0])
		// $('.blog').append(parsedData.post[0].title);
		var posts = parsedData.post
		posts.forEach(function (post) {
			console.log(post)
		$('.blog').append('<article><h2>' + post.title + '</h2><p>' + post.postcontent + '</p></article>')
		})
	}
	appendPosts(postFromServer)