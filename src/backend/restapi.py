from flask import Flask, request, jsonify
from flask_cors import CORS
from user_manager import UserManager
from game_logic import GameManager
from session_handler import SessionHandler
app = Flask(__name__)
CORS(app, resources={r"/*": {"origins": "*"}})


@app.route("/register", methods=['POST'])
def create_new_user():
    user_data = request.get_json()
    print(user_data['username'])
    user_manager.create_user(user_data['username'], user_data['password'])
    # create session token with user data using Session Handler
    session_dict = session_handler.open_new_session(user_data['username'])
    print(session_dict)
    return jsonify(session_dict['session_id'])


@app.route("/login")
def login_user():
    user_data = request.get_json()
    user_manager.get_user(user_data[1])
    # create session token with user data using Session Handler
    session_dict = session_handler.open_new_session(user_data['username'])
    return jsonify(session_id=session_dict['session_id'])


@app.route("/game-start")
def start_game():
    data = request.get_json()
    session_id = data['session_id']
    session_handler.start_game(session_id)
    return


@app.route("/game-guess")
def guess():
    data = request.get_json()
    session_id = data['session_id']
    current_session = session_handler.get_session(session_id)
    session_guess = data['guess']
    guess_status = game_manager.compare_guess_to_random_integer(
        session_guess, current_session['random_number'])
    session_handler.update_tries(session_id)
    current_guess_count = current_session['tries']
    return jsonify(status=guess_status, guess_count=current_guess_count)


@app.route("/highscores")
def get_highscore():
    highscores = user_manager.get_all_highscores()
    return jsonify(high_scores=highscores)


@app.route("/logout")
def logout():
    data = request.get_json()
    session_id = data['session_id']
    current_session = session_handler.get_session(session_id)
    username = current_session['username']
    session_handler.remove_user_sessions(username)


# @app.route("/delete")

if __name__ == "__main__":
    database = r"src\backend\database\guess_the_number.db"
    user_manager = UserManager(database)
    game_manager = GameManager()
    session_handler = SessionHandler()
    app.run()
