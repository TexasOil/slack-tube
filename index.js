var express = require('express');
var app = express();
var url = require('url');
var request = require('request');

var bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.set('port', (process.env.PORT || 9001));

app.get('/', function(req, res) {
	res.send('Working')
});

app.post('/post', function(req, res) {
	var parsed_url = {
		pathname: 'https://www.googleapis.com/youtube/v3/search',
		query: {
			part: 'snippet',
			q: req.body.text,
			key: process.env.YOUTUBE_KEY
		}
	};

	var query_url = parsed_url + '?part=' + parsed_url.query.part + '&q=' + parsed_url.query.q + '&key=' + parsed_url.query.key;

	request(query_url, function (error, response, body) {
		if (!error && response.statusCode == 200) {
			var data = JSON.parse(body);
			var index_to_grab = Math.floor((Math.random() * 5));
			var url_snippet = data.items[index_to_grab].id.videoId;
			var url_to_serve = 'https://www.youtube.com/watch?v=' + url_snippet;

			var body = {
				response_type: 'in_channel',
				text: url_to_serve
			};

			res.send(body);
		}
	});
});

app.listen(app.get('port'), function () {
	console.log('Node app is running on port', app.get('port'));
});