# User Manager Documentation

The `UserManager` class provides methods for user management and score tracking within the Guess-The-Number project. This documentation outlines the purpose, usage, and methods of the `UserManager` class.

## Table of Contents

- [Introduction](#introduction)
- [Prerequisites](#prerequisites)
- [Installation](#installation)
- [UserManager Class](#usermanager-class)
- [Example Usage](#example-usage)
  - [User Management](#user-management)
  - [Hashed Password Retrieval](#hashed-password-retrieval)
- [Contributing](#contributing)
- [License](#license)

## Introduction

The `UserManager` class is designed to facilitate user management and score tracking for the Guess-The-Number project. It offers functionality for creating users, removing them, managing their credentials, and maintaining a connection to an SQLite database.

For detailed information on the `User` class and its methods, please refer to the [User Class Documentation](./UserClass.md).

## Prerequisites

Before utilizing the `UserManager` class, ensure you have the following prerequisites:

- Python 3.x installed

## Installation

1. Clone or download the user_manager files.
2. Utilize the provided `user_scores.db` SQLite database or create your own database with the necessary tables.

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

#### `get_user(self, username)`

- Retrieves a `User` instance for a given username.
- Parameters:
  - `username` (str): The username for which to retrieve the user information.
- Returns:
  - An instance of the `User` class with the user's information.

#### `remove_user(self, name)`

- Removes a user and their associated score from the database.
- Parameters:
  - `name` (str): The username of the user to be removed.
- Returns:
  - `True` if the user was removed successfully.

#### `get_hashed_password(self, username)`

- Retrieves the hashed password for a given username.
- Parameters:
  - `username` (str): The username for which to retrieve the hashed password.
- Returns:
  - The hashed password (str) if found.
  
#### Other internal methods

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

# Close the database connection
user_manager.close()
```

### Hashed Password Retrieval

```python
# Retrieve hashed password
hashed_password = user_manager.get_hashed_password("username2")
print(f"Hashed Password for username2: {hashed_password}")
```

## Contributing

Contributions are welcome! If you encounter any issues or have suggestions for improvements, please feel free to submit a pull request or open an issue on the GitHub repository.

## License

This project is licensed under the MIT License.