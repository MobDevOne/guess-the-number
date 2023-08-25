from flask import Flask, jsonify

# TODO rename file
# TODO create functions to create user, get random_number, get_guess_count, calculate_score that correspond to the GameManager class methods


app = Flask(__name__)
app.json.sort_keys = False
# sort_keys needed to have a particular order of arguments


@app.route("/")
def hello_world():
    return "<p>Jean der Roblox Character!</p>"


@app.route("/test")
def test_json():
    status_code = 200
    message = "Ich bin ein JSON Objekt"
    return jsonify(status_code=status_code, message=message)
