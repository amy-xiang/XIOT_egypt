from flask import Flask, render_template, request
import sys

sys.path.insert(0, '../../')
from make_requests import handleLightSwitch, handleOutletSwitch

app = Flask(__name__)

# Define two global variables  
TURN_ON = '[1]'
TURN_OFF = '[0]'

# Home page
@app.route("/")
def index():
    return render_template('home.html')

# ---------------------------------------------------------
# LIGHT BULB SWITCH
# The Simple Switch page
@app.route("/light")
def chooseLight():
    return render_template('toggle_switch.html')

# If the user turns the light on
@app.route("/light_on")
def lightOn():
    handleLightSwitch(TURN_ON)
    return render_template('toggle_switch.html')

# If the user turns the light off
@app.route("/light_off")
def lightOff():
    handleLightSwitch(TURN_OFF)
    return render_template('toggle_switch.html')
# ---------------------------------------------------------

# Run the server 
if __name__ == "__main__":
    app.run(debug=True)
