# Make a POST request that turns the light and outlet ON/OFF

import requests

# Each request will have the same Content-Type, therefore 
# make it a global variable
headers = { 
        'Content-Type': 'application/json',
    }

def handleLightSwitch(data):
    url_light = 'http://blynk-cloud.com/5a13704de48e4400b0a62214e8e7b354/update/D4' 
    response = requests.put(url_light, headers=headers, data=data)

def handleOutletSwitch(data):
    url_outlet = 'http://blynk-cloud.com/5a13704de48e4400b0a62214e8e7b354/update/D14' 
    response = requests.put(url_light, headers=headers, data=data)


