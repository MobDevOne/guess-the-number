# SessionHandler class Documentation

The `SessionHandler` class is designed to manage gaming sessions for the Guess-The-Number game. It handles session creation, removal, and management of session-related information such as the number of tries, the associated username, and the generated random number for each session.

## Table of Contents

- [Introduction](#introduction)
- [Installation](#installation)
- [Class Methods](#class-methods)
  - [`__init__(self)`](#__init__self)
  - [`_create_session(self, session_id, username)`](#_create_sessionself-session_id-username)
  - [`_remove_session(self, session_id)`](#_remove_sessionself-session_id)
  - [`remove_user_sessions(self, username)`](#remove_user_sessionsself-username)
  - [`open_new_session(self, username)`](#open_new_sessionself-username)
  - [`get_session(self, session_id)`](#get_sessionself-session_id)
  - [`update_tries(self, session_id)`](#update_triesself-session_id)
  - [`get_tries(self, session_id)`](#get_triesself-session_id)
  - [`_generate_session_id(self)`](#_generate_session_idself)
- [Example Usage](#example-usage)

## Introduction

The `SessionHandler` class provides a way to manage and track gaming sessions for the Guess-The-Number game. It allows the creation of new sessions, removal of sessions, updating the number of tries, and retrieving session-related information.

## Installation

The `SessionHandler` class is part of the Guess-The-Number project. To use it, follow these steps:

1. Ensure you have Python 3.x installed.
2. Include the necessary imports at the beginning of your code:

```python
import uuid
from collections import defaultdict
from src.backend.game.game_logic import GameManager  # Import the necessary GameManager
```

3. You can then create an instance of the `SessionHandler` class and start managing gaming sessions.

## Class Methods

### `__init__(self)`

- Initializes a new instance of the `SessionHandler` class.
- Creates an internal dictionary to store session information.

### `_create_session(self, session_id, username)`

- Creates a new gaming session.
- Parameters:
  - `session_id` (str): The unique session identifier.
  - `username` (str): The associated username for the session.
- Generates a random number using the `GameManager.get_random_number()` method.
- Stores session information in the internal dictionary.

### `_remove_session(self, session_id)`

- Removes a gaming session based on the provided session ID.
- If the session ID exists, the session is removed from the internal dictionary.

### `remove_user_sessions(self, username)`

- Removes all gaming sessions associated with a specific username.
- Iterates through the sessions and removes sessions that match the provided username.

### `open_new_session(self, username)`

- Opens a new gaming session for the provided username.
- Removes any existing sessions for the same username.
- Generates a new session ID and creates a new session using `_create_session()`.

### `get_session(self, session_id)`

- Retrieves session information based on the provided session ID.
- Returns the session information as a dictionary or `None` if the session does not exist.

### `update_tries(self, session_id)`

- Updates the number of tries for a specific gaming session.
- Increments the number of tries for the provided session ID.

### `get_tries(self, session_id)`

- Retrieves the number of tries for a specific gaming session.
- Returns the number of tries or `None` if the session does not exist.

### `_generate_session_id(self)`

- Generates a unique session ID using the `uuid.uuid4()` function.
- Returns the generated session ID as a string.

## Example Usage

Here's an example of how to use the `SessionHandler` class:

```python
from session_handler import SessionHandler

# Create a new SessionHandler instance
session_handler = SessionHandler()

# Open a new gaming session for a username
username = "player1"
session_id = session_handler.open_new_session(username)

# Retrieve and print session information
session = session_handler.get_session(session_id)
print(f"Session ID: {session_id}")
print(f"Username: {session['username']}")
print(f"Tries: {session_handler.get_tries(session_id)}")
```

## Contributing

Contributions to the `SessionHandler` class are welcome! If you encounter any issues or have suggestions for improvements, please feel free to submit a pull request or open an issue on the GitHub repository.

## License

This project is licensed under the MIT License.