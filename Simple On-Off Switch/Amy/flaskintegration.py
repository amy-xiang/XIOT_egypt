from flask import Flask, render_template, request

app = Flask(__name__)

@app.route('/')
def index():
    return render_template("SimpleONOFF.html")

@app.route('/light')
def index():
    

if __name__ == "__main__":
    app.run()
    
