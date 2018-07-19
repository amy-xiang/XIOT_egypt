// Turn on
var data = {};
var url = 'http://blynk-cloud.com/5a13704de48e4400b0a62214e8e7b354/update/D4';
data.payload = ["0"];

var request = new XMLHttpRequest();

request.open('PUT', url, true);
request.setRequestHeader('Content-Type', 'application/json');

request.onreadystatechange = function () {
    if (this.readyState === 4) {
        console.log('Headers:', this.getAllResponseHeaders());
        console.log('Body:', data.payload);
    }
    };

request.send(JSON.stringify(data));