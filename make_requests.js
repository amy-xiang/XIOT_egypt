// Create a POST request using Node.js requests 

// To turn on the light
window.switchOn = function() {
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

    console.log("Turning the light bulb ON...");
    request(options, callback);
};

// To turn off the light 
window.switchOff = function() {
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

    console.log("Turning the light bulb OFF...");
    request(options, callback);
};


// FOR TESTING
// switchOn();
