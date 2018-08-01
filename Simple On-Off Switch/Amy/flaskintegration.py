from flask import Flask, render_template, request
from simpleonoffscript import lightswitch

on = '[1]'
off = '[0]'

app = Flask(__name__)

@app.route('/')
def index():
    return render_template("SimpleONOFF.html")

@app.route('/lighton')
def lighton():
    lightswitch(on)
    return render_template("SimpleONOFF.html")

@app.route('/lightoff')
def lightoff():
    lightswitch(off)
    return render_template("SimpleONOFF.html")

    
if __name__ == "__main__":
    app.run(debug=True)
    
