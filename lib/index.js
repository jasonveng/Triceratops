var $ = require('jquery')
var ajax = require('./ajax.js')

	function appendPosts() {
		ajax.postFromServer(appendCallback)
	}

	function appendCallback (err, res) {
		var parsedData = JSON.parse(res.text)
		var posts = parsedData.post
		posts.forEach(function (post) {
		$('.blog').append('<article><h2>' + post.title + '</h2><p>' + post.datestamp + '</p><p>' + post.postcontent + '</p></article>')
		})
	}

  function addPostToDatabase (newPost) {
    ajax.postFromServer(function(err, res) {
      if (err) { console.log('ERROR: reading while trying to write post'); return }
      var parsedData = JSON.parse(res.text)
      parsedData.post.push(newPost)
      var objectToPost = JSON.stringify(parsedData)
      ajax.postToServer(objectToPost, refreshPosts)

    })
  }

  function refreshPosts () {
  	console.log('I should refresh!')
    $('.blog').empty()
    $('#title').val("")
    $('#postcontent').val("")

    appendPosts()
  }

// function listen() {
//   $('#save').click(() => {
//   	console.log("listening")
//     formatObjectToSend()
//   })
// }

document.getElementById("save").addEventListener("click", formatObjectToSend);

var dateFormat = require('dateformat');
var now = new Date();
dateFormat(now, "dddd, mmmm dS, yyyy, h:MM:ss TT");
console.log(now)

function formatObjectToSend(){
	var title = $('#title').val()
  var postcontent = $('#postcontent').val()
  var datestamp = dateFormat();
  var object =  {
		"title": title,
		"postcontent": postcontent,
		"datestamp": datestamp
	}
	console.log("object", object)
	addPostToDatabase(object)
}

	appendPosts()