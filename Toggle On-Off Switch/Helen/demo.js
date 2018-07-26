// Create a POST request using Node.js requests 

// To turn on the light
function turnOn() {
    var request = require('request');

    // QUESTION: Why not this one?
    // var request = require('http');


    var headers = {
        'Content-Type': 'application/json'
    };

    var dataString = '[1]';

    var options = {
        url: 'http://blynk-cloud.com/5a13704de48e4400b0a62214e8e7b354/update/D4',
        method: 'POST',
        headers: headers,
        body: dataString
    };

    function callback(error, response, body) {
        if (!error && response.statusCode == 200) {
            console.log(body);
        }
    }

    request(options, callback);
};

// To turn off the light 
function turnOff() {
    var request = require('request');

    var headers = {
        'Content-Type': 'application/json'
    };

    var dataString = '[0]';

    var options = {
        url: 'http://blynk-cloud.com/5a13704de48e4400b0a62214e8e7b354/update/D4',
        method: 'POST',
        headers: headers,
        body: dataString
    };

    function callback(error, response, body) {
        if (!error && response.statusCode == 200) {
            console.log(body);
        }
    }

    request(options, callback);
};

console.log("Turning on the light bulb...");
turnOn();

// console.log("Turning off the light bulb...");
// turnOff();