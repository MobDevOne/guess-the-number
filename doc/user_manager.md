# User and User Score Manager Documentation

The User and User Manager are Python classes designed to facilitate user management and score tracking within the context of the Guess-The-Number project. This documentation provides detailed information on the purpose, usage, and methods of these classes.

## Table of Contents

- [Introduction](#introduction)
- [Prerequisites](#prerequisites)
- [Installation](#installation)
- [User Class](#user-class)
- [UserManager Class](#usermanager-class)
- [Example Usage](#example-usage)
  - [User Management](#user-management)
  - [Scores](#scores)

## Introduction

The User and User Manager classes offer functionality for creating users, managing their credentials, tracking scores, and maintaining a connection to an SQLite database. These classes are tailored for the Guess-The-Number project.

## Prerequisites

Before utilizing the User and User Manager classes, ensure you have the following prerequisites:

- Python 3.x installed
- `bcrypt` library installed (`pip install bcrypt`)

## Installation

1. Clone or download the user_manager files.
2. Install the required `bcrypt` library by running:
   ```
   pip install bcrypt
   ```
3. Utilize the provided `user_scores.db` SQLite database or create your own database with the necessary tables.

## User Class

### `User`

The `User` class represents a user's information and score within the Guess-The-Number project.

#### `__init__(self, conn, user_id, name, hashed_password)`

- Initializes a user instance.
- Parameters:
  - `conn` (sqlite3.Connection): The SQLite database connection.
  - `user_id` (str): The unique user ID.
  - `name` (str): The user's name.
  - `hashed_password` (str): The hashed user password.

#### `update_score(self, score)`

- Updates the user's score.
- Parameters:
  - `score` (int): The new score value.

#### `get_score(self)`

- Retrieves the user's score.
- Returns:
  - The user's score (int) if found, `None` if not found.

## UserManager Class

### `UserManager`

The `UserManager` class provides methods for user management and score tracking within the Guess-The-Number project.

#### `__init__(self, db_name)`

- Initializes the User Manager specifically for the Guess-The-Number project.
- Parameters:
  - `db_name` (str): The name of the SQLite database to connect to.

#### `close(self)`

- Closes the database connection.

#### `create_tables(self)`

- Creates the 'users' and 'scores' tables if they do not exist in the database.

#### `create_user(self, name, password)`

- Creates a new user and adds their information to the database.
- Parameters:
  - `name` (str): The username for the new user.
  - `password` (str): The password for the new user.
- Returns:
  - An instance of the `User` class.

#### `remove_user(self, name)`

- Removes a user and their associated score from the database.
- Parameters:
  - `name` (str): The username of the user to be removed.
- Returns:
  - `True` if the user was removed successfully.

#### `log_in_user(self, username, password)`

- Validates user credentials and returns a `User` instance if the credentials are correct.
- Parameters:
  - `username` (str): The username to log in with.
  - `password` (str): The password to validate.
- Returns:
  - An instance of the `User` class if the credentials are correct.

#### Other internal methods

- `_hash_password(self, password)`: Hashes a password for secure storage.
- `_verify_password(self, user_id, password)`: Verifies a password against the stored hash.
- `_verify_username(self, username)`: Checks if a username exists.
- `_get_user_id(self, username)`: Retrieves the user ID for a given username.

## Example Usage

### User Management

```python
# Initialize UserManager
db_name = "user_scores.db"
user_manager = UserManager(db_name)

# Create users
user1 = user_manager.create_user("username1", "pass123")
user2 = user_manager.create_user("username2", "secure456")

# Remove a user
user_manager.remove_user("username1")

# Log in users
logged_in_user1 = user_manager.log_in_user("username2", "secure456")

# Close the database connection
user_manager.close()
```

### Scores

```python
# Update and retrieve scores
logged_in_user1.update_score(100)
score = logged_in_user1.get_score()

print(f"{logged_in_user1.name}'s Score: {score}")
```

## Contributing

Contributions are welcome! If you encounter any issues or have suggestions for improvements, please feel free to submit a pull request or open an issue on the GitHub repository.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.