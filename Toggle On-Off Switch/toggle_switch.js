function switchChange(switchState) {
    if (switchState == 0) {
        switchState = 1; 
        var url = 'http://blynk-cloud.com/2674d23861f547c990b570a742954151/update/D14';
        var data = {payload: ["1"]};
        
        var output = document.getElementsByTagName("button")[0];
        output.innerHTML = "On";
    }
    else {
        switchState = 0; 
        var url = 'http://blynk-cloud.com/2674d23861f547c990b570a742954151/update/D4'
        var data = {payload: ["0"]};

        var output = document.getElementsByTagName("button")[0];
        output.innerHTML = "Off";
    }

    // Fetch a PUT Request
    // fetch(url, {
    //     method: 'PUT', 
    //     body: JSON.stringify(data), 
    //     headers: {
    //         'Content-Type': 'application/json' 
    //     }
    // })
    // .then(res => res.json())
    // .catch(error => console.error('Error:', error))
    // .then(response => console.log('Success:', response));
    return switchState;
}
