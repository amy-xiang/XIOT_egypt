function switchOn() {
    var url = 'http://blynk-cloud.com/2674d23861f547c990b570a742954151/update/D14';
    var data = {payload: ["1"]};

    fetch(url, {
        method: 'PUT', 
        body: JSON.stringify(data), 
        headers: {
            'Content-Type': 'application/json' 
        }
    })
    .then(res => res.json())
    .catch(error => console.error('Error:', error))
    .then(response => console.log('Success:', response));
}

function switchOff() {
    var url = 'http://blynk-cloud.com/2674d23861f547c990b570a742954151/update/D4';
    var data = {payload: ["0"]};

    fetch(url, {
        method: 'PUT', 
        body: JSON.stringify(data), 
        headers: {
            'Content-Type': 'application/json' 
        }
    })
    .then(res => res.json())
    .catch(error => console.error('Error:', error))
    .then(response => console.log('Success:', response));
}