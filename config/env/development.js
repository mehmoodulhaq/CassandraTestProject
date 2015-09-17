// Invoke 'strict' JavaScript mode
'use strict';

// Set the 'development' environment configuration object
module.exports = {
	db: 'mongodb://admin:thadmin@ds033163.mongolab.com:33163/thdoc',
	sessionSecret: 'developmentSessionSecret',
	facebook: {
		clientID: '1495276970734023',
		clientSecret: '6f2ae98be8b2fe6e953616d865904bac',
		callbackURL: 'http://localhost:9000/oauth/facebook/callback'
	},
	twitter: {
		clientID: 'EZbi5hGPA6qOpyoZgRufyHTJE',
		clientSecret: 'Kcc5hUxl1OIBsemtyxlGJZh8Lbse5S8LqNvfFbhxfsGafc54aO',
		callbackURL: 'http://localhost:9000/oauth/twitter/callback'
	},
	google: {
		clientID: '599061210651-nvbf8r0t8rj0fjju6gufg41hen58dhku.apps.googleusercontent.com',
		clientSecret: 'l1RnjUB_2dhKJGlYjFwtNFJX',
		callbackURL: 'http://localhost:9000/oauth/google/callback'
	}
};