// MAKE A POST REQUEST TO TURN THE LIGHT ON/OFF

/*****************************************************************************/
// To turn on the light
<<<<<<< HEAD
window.switchon = function() {
=======
// To run with browserify (on the browser)
// window.switchOn = function() {

// To run with Node.js on terminal
function switchOn() {
>>>>>>> 0d105f30ac432e7a935f0a07ad59646300f1257b
    var request = require('request');

    // QUESTION: Why not this one?
    // var request = require('http');

    var headers = {
        'Content-Type': 'application/json'
    };

    var dataString = '[1]';

    var options = {
        url: 'https://blynk-cloud.com/5a13704de48e4400b0a62214e8e7b354/update/D4',
        method: 'PUT',
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
// To run with browserify
// window.switchOff = function() {

// To run with Node.js on terminal
function switchOff() {
    var request = require('request');

    var headers = {
        'Content-Type': 'application/json'
    };

    var dataString = '[0]';

    var options = {
        url: 'https://blynk-cloud.com/5a13704de48e4400b0a62214e8e7b354/update/D4',
        method: 'PUT',
        headers: headers,
        body: dataString
    };

    function callback(error, response, body) {
        if (!error && response.statusCode == 200) {
            console.log(body);
        }
    }

    console.log("Turning the light bulb OFF...");
    

    request(options, callback)

     // Check status code
     .on('response', function(response) {
        console.log(response.statusCode)
    });
};


// FOR TESTING
// switchOn();
switchOff();

/****************************************************************/

/****************************************************************/
// MAKE REQUESTS WITH FETCH


// CURL Commands
// curl -H 'Content-Type: application/json' -X PUT -d '[1]' http://blynk-cloud.com/5a13704de48e4400b0a62214e8e7b354/update/D4
// curl -H 'Content-Type: application/json' -X PUT -d '[0]' http://blynk-cloud.com/5a13704de48e4400b0a62214e8e7b354/update/D4