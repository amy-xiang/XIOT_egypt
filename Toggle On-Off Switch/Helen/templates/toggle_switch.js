// There is one button on the webpage that alternates between on and off. Each time it's clicked, 
// it triggers the switchChange function which checks the state of the switchState variable and then
// acts accordingly by modifying the url and the data.

function switchChange(switchState) {
    // Where the data represents the body
    var data = {};
    if (!switchState) {
        // If the switch is off, turn it on 
        switchState = true; 
        var url = 'https://blynk-cloud.com/5a13704de48e4400b0a62214e8e7b354/update/D4';
        data.payload = ["1"];
        
        // Update the text on the DOM to reflect the status of the xChip
        var output = document.getElementsByTagName("button")[0];
        output.innerHTML = "On";
        
        var status = document.getElementsByTagName("h2")[0];
        status.innerHTML = "xChip Status: OFF";
    }
    else {
        // If the switch is on, turn it off
        switchState = false; 
        var url = 'https://blynk-cloud.com/5a13704de48e4400b0a62214e8e7b354/update/D4'
        data.payload = ["0"];

        // Update the text on the DOM to reflect the status of the xChip
        var output = document.getElementsByTagName("button")[0];
        output.innerHTML = "Off";

        var status = document.getElementsByTagName("h2")[0];
        status.innerHTML = "xChip Status: ON";
    }

    // USING XMLHttpRequest
    // var request = new XMLHttpRequest();

    // request.open('PUT', url, true);
    // request.setRequestHeader("Content-Type", "application/json");
    // // // request.setRequestHeader("Access-Control-Allow-Origin", "*");
    // // // request.setRequestHeader("Access-Control-Allow-Headers", "Content-Type");
    // // // request.setRequestHeader("Access-Control-Allow-Methods", "PUT");

    // request.onreadystatechange = function () {
    //     if (this.readyState === 4) {
    //       console.log('Headers:', this.getAllResponseHeaders());
    //       console.log('Body:', data);
    //     }
    //   };

    // request.send(JSON.stringify(data));
    


    /***********************************************************/
    // USING FETCH
    fetch(url, {
        method: 'POST', 
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
