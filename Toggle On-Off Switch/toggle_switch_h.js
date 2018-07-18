// There is one button on the webpage that alternates between on and off. Each time it's clicked, 
// it triggers the switchChange function which checks the state of the switchState variable and then
// acts accordingly by modifying the url and the data.

function switchChange(switchState) {
    if (!switchState) {
        // If the switch is off, turn it on 
        switchState = true; 
        var url = 'http://blynk-cloud.com/2674d23861f547c990b570a742954151/update/D14';
        var data = {payload: ["1"]};
        
        var output = document.getElementsByTagName("button")[0];
        output.innerHTML = "On";
    }
    else {
        // If the switch is on, turn it off
        switchState = false; 
        var url = 'http://blynk-cloud.com/2674d23861f547c990b570a742954151/update/D4'
        var data = {payload: ["0"]};

        var output = document.getElementsByTagName("button")[0];
        output.innerHTML = "Off";
    }

    // Fetch a PUT Request
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

    return switchState;
}
