import requests

header = {
    'Content-Type':'application/json',
    }

def lightswitch(data):
    response = requests.put('http://blynk-cloud.com/5a13704de48e4400b0a62214e8e7b354/update/D14', headers = header, data = data)

