from flask import Flask

# TODO rename file
# TODO create functions to create user, get random_number, get_guess_count, calculate_score that correspond to the GameManager class methods


app = Flask(__name__)


@app.route("/")
def hello_world():
    return "<p>Jean der Roblox Character!</p>"
