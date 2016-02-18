var $ = require('jquery')
var ajax = require('./ajax.js')

	function appendPosts() {
		ajax.postFromServer(appendCallback)
	}

	function appendCallback (err, res) {
		var parsedData = JSON.parse(res.text)
		var posts = parsedData.post
		posts.forEach(function (post) {
			$('.blog').append('<article><h2>' + post.title + '</h2><p>' + post.postcontent + '</p></article>')
			console.log(post)
		$('.blog').append('<article><h2>' + post.title + '</h2><p>' + post.datestamp + '</p><p>' + post.postcontent + '</p></article>')
		})
	}

	var pretendPost = {
		"title": "Boyhouse",
		"postcontent": "Blah blah happiness",
		"datestamp": "13-12-12"
	}

	function addPostToDatabase (newPost) {
		ajax.postFromServer(function(err, res) {
			if (err) { console.log('ERROR: reading while trying to write post'); return }
			console.log('passed in', res.text)
			var parsedData = JSON.parse(res.text)
			parsedData.post.push(newPost)
			var objectToPost = JSON.stringify(parsedData)
			console.log('to post', objectToPost)
			ajax.postToServer(objectToPost)
		})
	}

	appendPosts()
	addPostToDatabase(pretendPost)