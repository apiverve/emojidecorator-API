/**
 * Basic Example - Emoji Decorator API
 *
 * This example demonstrates how to use the Emoji Decorator API.
 * Make sure to set your API key in the .env file or replace '[YOUR_API_KEY]' below.
 */

require('dotenv').config();
const emojidecoratorAPI = require('../index.js');

// Initialize the API client
const api = new emojidecoratorAPI({
    api_key: process.env.API_KEY || '[YOUR_API_KEY]'
});

// Example query
var query = {
  "text": "I am so excited to go to the lake and swim"
};

// Make the API request using callback
console.log('Making request to Emoji Decorator API...\n');

api.execute(query, function (error, data) {
    if (error) {
        console.error('Error occurred:');
        if (error.error) {
            console.error('Message:', error.error);
            console.error('Status:', error.status);
        } else {
            console.error(JSON.stringify(error, null, 2));
        }
        return;
    }

    console.log('Response:');
    console.log(JSON.stringify(data, null, 2));
});
