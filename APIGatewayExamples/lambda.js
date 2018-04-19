let AWS = require('aws-sdk');
exports.handler = function(event, context, callback) {

	console.log("Event: " + JSON.stringify(event));

	callback(null,'Successfully executed');
}