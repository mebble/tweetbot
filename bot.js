console.log('The replier bot is starting');

const Twit = require('twit');
const config = require('./config');

let T = new Twit(config);

/* Set up user stream - tweet & reply */
let stream = T.stream('user');
stream.on('tweet', tweetEvent);

function tweetEvent(event) {
	let replyTo = event.in_reply_to_screen_name;
	let from = event.user.screen_name;
	let text = event.text;

	console.log(`From @${from} to @${replyTo}`);

	if (replyTo === 'nottiebottie') {
		let newTweet = `@${from} Thank you for acknowledging my existence!`;
		tweetIt({
			status: newTweet
		});
	}
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