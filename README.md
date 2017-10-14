# TweetBot

A basic Twitterbot that responds to tweets that mention the bot.

## Getting Started

### Prerequisites

You must have [Node.js](https://nodejs.org/en/) installed on your computer to create a local server for the bot to run on.

### Installation

This project depends on the [Twit](https://www.npmjs.com/package/twit) npm package. This package uses the Twitter API to run the bot. Run the following command in your terminal at the project's home directory to install it.
```
$ npm install
```

### Configuration

Your bot needs a Twitter account. After setting one up, log into it and go to the [Twitter Application Management](https://apps.twitter.com/) page. Create a new app and fill in the required details. After your app is created, you'll see a `Keys and Access Tokens` tab in the app page. Generate the consumer key and secret and access token and secret and copy them.

**Do not make your Consumer Secret and Access Token secret accessible to anyone**

Create a file `config.js` in your project's home directory and put the following code in it.
```
module.exports = {
	consumer_key:         '...',
	consumer_secret:      '...',
	access_token:         '...',
	access_token_secret:  '...',
	timeout_ms:           60 * 1000
}
```
Paste the copied tokens and keys on the blank spaces above. This information will link the bot running on your computer to the Twitter account associated with it.

## Running The Bot

Run the following command in your terminal at the project's home directory.
```
$ npm start
```
Your Twitterbot is now up and running! You can tweet to your bot from another Twitter account and the bot will tweet back to you.