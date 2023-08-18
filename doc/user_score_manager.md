# User Score Manager Documentation (For Guess-The-Number Project)

The User Score Manager is a Python class designed specifically for managing user information and scores within the context of the Guess-The-Number project. This documentation outlines the purpose, usage, and methods of the User Score Manager class tailored for the Guess-The-Number project.

## Table of Contents

- [Introduction](#introduction)
- [Prerequisites](#prerequisites)
- [Installation](#installation)
- [Usage](#usage)
- [API Reference](#api-reference)
  - [`UserScoreManager`](#userscoremanager)
    - [`__init__(self, db_name)`](#__init__)
    - [`create_tables(self)`](#create_tables)
    - [`create_user(self, name, password)`](#create_user)
    - [`verify_password(self, user_id, password)`](#verify_password)
    - [`update_score(self, user_id, score)`](#update_score)
    - [`get_score(self, user_id)`](#get_score)
- [Example Usage](#example-usage)
- [Contributing](#contributing)
- [License](#license)

## Introduction

The User Score Manager provides a Python class to interact with an SQLite database, allowing you to manage user information and scores specifically for the Guess-The-Number project. It supports user creation, password verification, score updates, and score retrieval within the context of the game.

## Prerequisites

Before using the User Score Manager in the Guess-The-Number project, ensure you have the following prerequisites:

- Python 3.x installed
- `bcrypt` library installed (`pip install bcrypt`)

## Installation

1. Clone or download the User Score Manager repository.
2. Install the required `bcrypt` library by running:
   ```
   pip install bcrypt
   ```
3. Use the provided `user_scores.db` SQLite database or create your own database with appropriate tables.

## Usage

1. Import the necessary libraries and classes:
   ```python
   import sqlite3
   import uuid
   import bcrypt
   ```

2. Create an instance of the `UserScoreManager` class within the context of the Guess-The-Number project:
   ```python
   db_name = "user_scores.db"  # Specify your database name
   score_manager = UserScoreManager(db_name)
   ```

3. Use the methods provided by the `UserScoreManager` class to manage users and scores within the Guess-The-Number project.

## API Reference

### `UserScoreManager`

#### `__init__(self, db_name)`

- Initializes the User Score Manager specifically for the Guess-The-Number project.
- Parameters:
  - `db_name` (str): The name of the SQLite database to connect to.

#### `create_tables(self)`

- Creates the 'users' and 'scores' tables if they do not exist in the database.

#### `create_user(self, name, password)`

- Creates a new user and adds their information to the database.
- Parameters:
  - `name` (str): The username for the new user.
  - `password` (str): The password for the new user.
- Returns:
  - An instance of the `User` class.

#### `verify_password(self, user_id, password)`

- Verifies a user's password.
- Parameters:
  - `user_id` (str): The ID of the user to verify.
  - `password` (str): The password to verify.
- Returns:
  - `True` if the password is correct, `False` otherwise.

#### `update_score(self, user_id, score)`

- Updates a user's score.
- Parameters:
  - `user_id` (str): The ID of the user whose score to update.
  - `score` (int): The new score value.

#### `get_score(self, user_id)`

- Retrieves a user's score.
- Parameters:
  - `user_id` (str): The ID of the user whose score to retrieve.
- Returns:
  - The user's score (int) if found, `None` if the user is not found.

## Example Usage

```python
# Create two sample users within the Guess-The-Number project
user1 = score_manager.create_user("Benutzer3", "pass123")
user2 = score_manager.create_user("Benutzer4", "secure456")

# Verify passwords
print(score_manager.verify_password(user1.id, "pass123"))  # True
print(score_manager.verify_password(user2.id, "wrongpass"))  # False

# Update and retrieve scores
score_manager.update_score(user1.id, 100)
score_manager.update_score(user2.id, 150)

# Print user scores
print(f"{user1.name}'s Score: {score_manager.get_score(user1.id)}")
print(f"{user2.name}'s Score: {score_manager.get_score(user2.id)}")
```

## Contributing

Contributions are welcome! If you encounter any issues or have suggestions for improvements, please feel free to submit a pull request or open an issue on the GitHub repository.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.