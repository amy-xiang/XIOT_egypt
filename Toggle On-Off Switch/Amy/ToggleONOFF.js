function toggle_switch(toggle)
{
    if (toggle == 0)
    {
        toggle = 1;
        var url = 'http://blynk-cloud.com/2674d23861f547c990b570a742954151/update/D14';
        var data = {payload: ["1"]};

        var output = document.getElementsByTagName("button")[0];
        output.innerHTML = "OFF";
        output.style.backgroundColor = "rgb(219, 87, 87)";
    
        var textchange = document.getElementsByClassName('update')[0];
        textchange.innerHTML = "xChip is Currently ON";
    }
    else
    {
        toggle = 0;
        var url = 'http://blynk-cloud.com/2674d23861f547c990b570a742954151/update/D4'
        var data = {payload: ["0"]};

        var output = document.getElementsByTagName("button")[0];
        output.innerHTML = "ON";
        output.style.backgroundColor = "#4CAF50";

        var textchange = document.getElementsByClassName('update')[0];
        textchange.innerHTML = "xChip is Currently OFF";

    }

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
    

    return toggle;

}
