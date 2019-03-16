require("dotenv").config();
var request = require('request');
var Twitter = require('twitter');
var Spotify = require('node-spotify-api');
var fs = require('fs')
var keys = require('./keys.js')

var selection = process.argv[2];
var query = process.argv.slice(3).join(' ')



function myTweets() {
	var twitter_client = new Twitter(keys.twitterKeys)
	var params = {screen_name: 'thehill'};

	twitter_client.get('statuses/user_timeline', params, function(error, tweets, response) {
    if (!error) {
      for (var i = 0; i < tweets.length; i++) {
        console.log(tweets[i].created_at);
        console.log("");
        console.log(tweets[i].text);
      }
    }
	});
}

function spotify(songName) {
	var spotify_client = new Spotify(keys.spotifyKeys)
	var searchQuery	= {type: 'track', query: songName, limit: 10}

	if (songName === 'The Sign') {
		spotify_client
  			.request('https://api.spotify.com/v1/tracks/0hrBpAOgrt8RXigk83LLNE')
  			.then(function(data) {
    			console.log('Track Name', data.name)
	  			console.log('Album Name: '+ data.album.name)
	  			console.log('Artist Name: '+ data.artists[0].name)
	  			console.log('Preview URL: ' + data.preview_url+'\n') 
  		})
  		.catch(function(err) {
    	console.error('Error occurred: ' + err); 
  		}); 
	}

	else {
		spotify_client.search(searchQuery, function(err, data) {
	  		if (err) {
	    		return console.log('Error occurred: ' + err);
	  		}
	  		
	  		data.tracks.items.forEach(function(item) {
	  			track = 'Track Name: '+ item.name
	  			album = 'Album Name: '+ item.album.name
	  			artist = 'Artist Name: '+ item.artists[0].name
	  			url = 'Preview URL: ' + item.preview_url+'\n'
	  			console.log(track+'\n'+album+'\n'+artist+'\n'+url)
	  			//log out text
                fs.appendFileSync('log.txt', '\n'+track+'\n'+album+'\n'+artist+'\n'+url);
			})

		})
	}
}


function movie(movieName) {
	const omdb = keys.omdbKeys.id	
	request('http://www.omdbapi.com/?apikey='+omdb+"&type=movie&t="+movieName, 
	function(error, response, body) {
		if (error) {
			return console.log(error);
		}
		let json = JSON.parse(body)
		title = '\nTitle: '+json.Title
		year = 'Year: '+json.Year
		rating1 = 'Rating from '+json.Ratings[0].Source+": "+json.Ratings[0].Value
		rating2 = 'Rating from '+json.Ratings[1].Source+": "+json.Ratings[1].Value
		country = 'Country of Origin: '+json.Country
		language = 'Language: '+json.Language
		actors = 'Actors: '+json.Actors
		plot = "Plot: "+json.Plot+"\n"
		console.log(title+'\n'+year+'\n'+rating1+'\n'+rating2+'\n'+country+'\n'+language+'\n'+actors+'\n'+plot)
		fs.appendFileSync('log.txt', '\n'+title+'\n'+year+'\n'+rating1+'\n'+rating2+'\n'+country+'\n'+language+'\n'+actors+'\n'+plot);
	});
}

var doThis = function() {
    fs.readFile("random.txt", "utf8", function(error, data) {
      console.log(data);
  
      var dataArr = data.split(",");
      
      spotify(dataArr[1]);
    });
  };

function menu(selection, query) {
	fs.appendFileSync('log.txt',"\n"+selection+" "+query+"\n")
	switch (selection) {

		case "my-tweets":
			myTweets();
			break;

		case "spotify-this-song":
			if (query === '' || query === null) {
				query = "The Sign"
			}
			spotify(query);
			break;

		case "movie-this":
			if (query === '' || query === null) {
				query = "Mr. Nobody"
			}
			movie(query);
			break;

		case "do-what-it-says":
			doThis();
            break;
            default:
            console.log("LIRI doesn't know that");
	}
}

menu(selection, query)