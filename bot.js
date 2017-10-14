console.log('The replier bot is starting');

const Twit = require('twit');
const config = require('./config');

let T = new Twit(config);

/* Set up user stream - tweet & reply */
let stream = T.stream('user');
stream.on('tweet', tweetEvent);

function tweetEvent(event) {
	let from = event.user.screen_name;
	let mentions = event.entities.user_mentions;
	let thisBot = 'nottiebottie';

	mentions.forEach(function(mention) {
		let mention_screen_name = mention.screen_name;

		console.log(`From @${from} to @${mention_screen_name}`);
		if (mention_screen_name === thisBot) {
			let date = new Date();
			let time = `${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`;
			let replyTxt = `Hey @${from} ! I just got your tweet at ${time} today`;

			tweetIt({ status: replyTxt });
		}
	});
}

function tweetIt(tweet) {
	T.post('statuses/update', tweet, tweeted);

	function tweeted(err, data, response) {
		if (err) {
			console.log('Something went wrong');
		} else {
			console.log('It worked!');
		}
	}
}