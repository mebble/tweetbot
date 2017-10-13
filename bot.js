console.log('The bot is starting');

const Twit = require('twit');
const config = require('./config');

let T = new Twit(config);

/* STREAM request (user stream) - tweet */
let stream = T.stream('user');
stream.on('tweet', tweetEvent);

function tweetEvent(event) {
	const fs = require('fs');
	let jsonStr = JSON.stringify(event, null, 4);
	fs.writeFile(`tweets/tweet-${event.id_str.slice(0, 5)}.json`, jsonStr);
}

/* STREAM request (user stream) - follow */
// let stream = T.stream('user');
// stream.on('follow', followed);

// function followed(event) {
// 	let name = event.source.name;
// 	let screenName = event.source.screen_name;

// 	tweetIt({
// 		status: `Do you like cookies, @${screenName} ?`
// 	});
// }
// function tweetIt(tweet) {
// 	T.post('statuses/update', tweet, tweeted);

// 	function tweeted(err, data, response) {
// 		if (err) {
// 			console.log('Something went wrong');
// 		} else {
// 			console.log(data);
// 		}
// 	}
// }

/* POST request */
// setInterval(function() {
// 	tweetIt({
// 		status: `${Math.floor(Math.random() * 100)} is a random number!`
// 	});
// }, 5 * 1000);

// function tweetIt(tweet) {
// 	T.post('statuses/update', tweet, tweeted);

// 	function tweeted(err, data, response) {
// 		if (err) {
// 			console.log('Something went wrong');
// 		} else {
// 			console.log(data);
// 		}
// 	}
// }

/* GET request */
// params = {
// 	q: 'trump since:2017-08-30',
// 	count: 5
// };
// T.get('search/tweets', params, gotData);

// function gotData(err, data, response) {
// 	let tweets = data.statuses;
// 	tweets.forEach(function(tweet) {
// 		console.log(tweet.text);
// 		console.log('\n');
// 	});
// }