from flask import Flask, request, jsonify
from backend.user_manager import UserManager
from backend.user import User
from backend.game.game_logic import GameManager
app = Flask(__name__)


@app.route("/gethighscores")
def get_highscore():
    # for all users or for current user?
    # call function to get high score(s)
    high_scores = {"RobloxJean": 420, "Leventus Mutlus": 69}
    return jsonify(high_scores)


# why do we need that?
@app.route("/game-start")
def get_random_number():
    pass


@app.route("/game-guess")
def guess():
    data = request.get_json()
    comparison_result = game_manager.compare_guess_to_random_integer()


@app.route("/register")
def create_new_user():
    user_data = request.get_json()
    user_manager.create_user(user_data[1], user_data[2])
    # create session token with user data using Session Handler
    session_token = "ABC"
    return jsonify(session_token=session_token)


# no login method anymore?


@app.route("/login")
def login_user():
    user_data = request.get_json()
    user_manager.get_user(user_data[1])
    # create session token with user data using Session Handler
    session_token = "ABC"
    return jsonify(session_token=session_token)


if __name__ == "__main__":
    # dummy data
    database = "test.db"
    user_manager = UserManager(database)
    user_manager.create_tables()
    game_manager = GameManager()
