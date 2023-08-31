from flask import Flask, request, jsonify
from backend.user_manager import UserManager
from backend.game.game_logic import GameManager
from backend.session_handler import SessionHandler
app = Flask(__name__)


@app.route("/register")
def create_new_user():
    user_data = request.get_json()
    user_manager.create_user(user_data['username'], user_data['password'])
    # create session token with user data using Session Handler
    session_id = session_handler.open_new_session(user_data['username'])
    return jsonify(session_token=session_id)


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
    current_session = session_handler.get_session(session_id)
    return


@app.route("/game-guess")
def guess():
    data = request.get_json()
    comparison_result = game_manager.compare_guess_to_random_integer()


@app.route("/highscores")
def get_highscore():
    # for all users or for current user?
    # call function to get high score(s)
    high_scores = {"RobloxJean": 420, "Leventus Mutlus": 69}
    return jsonify(high_scores)

# @app.route("/logout")
# @app.route("/logout-all")
# @app.route("/delete")


if __name__ == "__main__":
    # dummy data
    database = "test.db"
    user_manager = UserManager(database)
    user_manager.create_tables()
    game_manager = GameManager()
    session_handler = SessionHandler()
