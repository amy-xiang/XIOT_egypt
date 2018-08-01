function switchOn()
{
    // variable declaration of needed assets
    var url = 'https://crossorigin.me/https://blynk-cloud.com/5a13704de48e4400b0a62214e8e7b354/update/D4';
    var data = '[1]';
    var xhr = new XMLHttpRequest();
    xhr.open('GET', url, true);
    // xhr.setRequestHeader('Content-Type', 'application/json');
    
    xhr.send();

    xhr.onreadystatechange = function() {
        console.log(this.status);
        if (this.readyState == XMLHttpRequest.DONE) {
            console.log("Successful POST request");
        }
    }


    // fetch(url, {
    //     method: 'POST', 
    //     body: data, 
    //     headers: {
    //         'Content-Type': 'application/json' 
    //     }
    // })
    // .then(res => res.json())
    // .catch(error => console.error('Error:', error))
    // .then(response => console.log('Success:', response));

}

function switchoff()
{

      // variable declaration of needed assets
      var url = 'https://blynk-cloud.com/5a13704de48e4400b0a62214e8e7b354/update/D4';
      var data = '[0]';
      var xhr = new XMLHttpRequest();
      xhr.open('PUT', url, true);
      xhr.setRequestHeader('Content-Type', 'application/json');
  
      xhr.onreadystatechange = function() {
          console.log(this.response);
          if (this.readyState == XMLHttpRequest.DONE) {
              console.log("Successful POST request");
          }
      }
      
      xhr.send(data);
    // var url = 'https://blynk-cloud.com/2674d23861f547c990b570a742954151/update/D4';
    // var data = '[1]';

    // fetch(url, {
    //     method: 'PUT', 
    //     body: data,
    //     headers: {
    //         'Content-Type': 'application/json' 
    //     }
    // })
    // .then(res => res.json())
    // .catch(error => console.error('Error:', error))
    // .then(response => console.log('Success:', response));

}

// switchOn();