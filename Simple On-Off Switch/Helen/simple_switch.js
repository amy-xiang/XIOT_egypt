// There are two buttons on the webpage--on and off. Each button has its respective function where 
// the url and data is defined and then passed into the makeRequest function. 

function switchOn() {
    // To switch the xChip on, define the url and data as follows
    var url = 'https://blynk-cloud.com/5a13704de48e4400b0a62214e8e7b354/update/D4';
    // var data = {payload: ["1"]};
    var data = "['1']";

    var status = document.getElementsByTagName("h2")[0];
    status.innerHTML = "xChip Status: ON";

    // Fetch a PUT Request
    makeRequest(url, data); 
}

function switchOff() {
    // To switch the xChip off, define the url and data as follows
    var url = 'https://blynk-cloud.com/5a13704de48e4400b0a62214e8e7b354/update/D4';
    // var data = {payload: ["0"]};
    var data = 

    var status = document.getElementsByTagName("h2")[0];
    status.innerHTML = "xChip Status: OFF";

    // Fetch a PUT Request
    makeRequest(url, data); 
}

function makeRequest(url, data) {
    // PUT request
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