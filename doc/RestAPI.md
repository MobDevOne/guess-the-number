# Guess the Number Flask Application

This Flask application provides the backend for a simple "Guess the Number" game. It allows users to register, log in, start a game session, make guesses, retrieve highscores, and logout.

## Dependencies

- Flask: A Python web framework for building web applications.
- Flask-CORS: A Flask extension for handling Cross-Origin Resource Sharing (CORS).
- user_manager.py: Module for managing user accounts and highscores.
- game_manager.py: Module for managing the game logic.
- session_handler.py: Module for managing user sessions.

## Routes

### `/register` (POST)

- Creates a new user account with the provided username and password.
- Generates a session token using the Session Handler.
- Returns the session ID in JSON format.

### `/login` (POST)

- Authenticates the user with the provided username and password.
- Generates a session token using the Session Handler.
- Returns the session ID in JSON format.

### `/game-start` (POST)

- Starts a new game session for the authenticated user.
- Requires a valid session ID.
- Returns a status code `200`.

### `/game-guess` (POST)

- Allows the user to make a guess in the game.
- Requires a valid session ID.
- Compares the user's guess to the current random number for the session using the Game Manager.
- Updates the number of tries in the session using the Session Handler.
- Returns the guess result and the current number of tries in JSON format.

### `/highscores` (GET)

- Retrieves and returns highscores for all users.

### `/logout` (POST)

- Logs out the user by removing their session.
- Requires a valid session ID.

## Initialization

- Initializes the Flask application and sets up CORS.
- Creates instances of `UserManager`, `GameManager`, and `SessionHandler` for managing users, game logic, and sessions.
- The application runs on the default Flask development server.

## Usage

1. Start the application by running this script.
2. Access the application's routes using appropriate HTTP requests (e.g., POST for registration and login, GET for highscores).
3. Maintain user sessions for playing the game and tracking highscores.

Please make sure to install the required dependencies and configure the database path (`database`) before running the application.
