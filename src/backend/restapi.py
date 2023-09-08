import os
from flask import Flask, request, jsonify
from flask_cors import CORS
from user_manager import UserManager
from game_manager import GameManager
from session_handler import SessionHandler
app = Flask(__name__)
CORS(app, resources={r"/*": {"origins": "*"}})


@app.route("/register", methods=['POST'])
def create_new_user():
    user_data = request.get_json()
    user_manager.create_user(user_data['username'], user_data['password'])
    # create session token with user data using Session Handler
    current_session_id = session_handler.open_new_session(
        user_data['username'])
    return jsonify(current_session_id)


@app.route("/login", methods=['POST'])
def login_user():
    user_data = request.get_json()
    current_password = user_manager.get_password(user_data['username'])
    if current_password == user_data['password']:
        # create session token with user data using Session Handler
        current_session_id = session_handler.open_new_session(
            user_data['username'])
        return jsonify(current_session_id)


@app.route("/game-start", methods=['POST'])
def start_game():
    data = request.get_json()
    session_id = data['session_id']
    session_handler.start_game(session_id)
    return "200"


@app.route("/game-guess", methods=['POST'])
def guess():
    data = request.get_json()
    session_id = data['session_id']
    # get user name out of dict for with current session id
    current_username = session_handler.get_username_for_session(session_id)
    # get user object corresponding to username
    current_user = user_manager.get_user(current_username)
    current_random_number_for_session = session_handler.get_random_number_for_session(
        session_id)
    session_guess = data['guess']
    guess_status = game_manager.compare_guess_to_random_number(
        session_guess, current_random_number_for_session)
    current_tries = session_handler.get_tries(session_id)
    if guess_status == 0:
        highscore = game_manager.calculate_score(current_tries)
        db_current_highscore = current_user.get_score()
        if highscore > db_current_highscore:
            current_user.update_score(highscore)

    session_handler.update_tries(session_id)
    current_guess_count = session_handler.get_tries(session_id)
    return jsonify(status=guess_status, guess_count=current_guess_count)


@app.route("/highscores", methods=['GET'])
def get_highscore():
    highscores = user_manager.get_all_highscores()
    return highscores


@app.route("/logout", methods=['POST'])
def logout():
    data = request.get_json()
    session_id = data['session_id']
    current_session = session_handler.get_session(session_id)
    username = current_session['username']
    session_handler.remove_user_sessions(username)
    return "200"


# @app.route("/delete")

if __name__ == "__main__":
    database = r"./database/guess_the_number.db"
    if not os.path.isfile(database):
    # If it doesn't exist, create the database directory if needed
        db_dir = os.path.dirname(database)
        if not os.path.exists(db_dir):
            os.makedirs(db_dir)
    user_manager = UserManager(database)
    game_manager = GameManager()
    session_handler = SessionHandler()
    app.run(host='0.0.0.0')