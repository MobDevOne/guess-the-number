from flask import Flask

app = Flask(__name__)


@app.route("/")
def hello_world():
    return "<p>Jean der Roblox Character!</p>"
