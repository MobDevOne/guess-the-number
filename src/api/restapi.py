from flask import Flask, request
from backend.user_manager import User, UserManager
app = Flask(__name__)


@app.route("/gethighscore")
def get_highscore():
    pass

# frontend needs to send request something like this
# .../createuser=name&password


@app.route("/register")
def create_new_user():
    user_data = request.args.get("register")
    user_manager.create_user(user_data[0], user_data[1])


@app.route("/login")
def login_user():
    login_data = request.args.get("login")
    # is this right? will this return the User instance? idk
    # and how would the score update work? can you send the user instance with a query string?
    user_manager.log_in_user(login_data[0], login_data[1])


if __name__ == "__main__":
    # dummy data
    database = "test.db"
    user_manager = UserManager(database)
    user_manager.create_tables()
