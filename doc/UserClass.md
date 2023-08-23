# User Class Documentation

The `User` class provides methods to interact with user information and scores within the context of the Guess-The-Number project. This documentation outlines the purpose, usage, and methods of the `User` class.

## Table of Contents

- [Introduction](#introduction)
- [Methods](#methods)
  - [`__init__(self, conn, user_id, name, hashed_password)`](#__init__)
  - [`update_score(self, score)`](#update_score)
  - [`get_score(self)`](#get_score)
- [Example Usages](#example-usages)

## Introduction

The `User` class represents a user's information and score within the Guess-The-Number project. It provides methods to update the user's score and retrieve their score from the associated database.

## Methods

### `__init__(self, conn, user_id, name, hashed_password)`

- Initializes a `User` instance.
- Parameters:
  - `conn` (sqlite3.Connection): The SQLite database connection.
  - `user_id` (str): The unique user ID.
  - `name` (str): The user's name.
  - `hashed_password` (str): The hashed user password.

### `update_score(self, score)`

- Updates the user's score in the associated database.
- Parameters:
  - `score` (int): The new score value.
- Description:
  - This method updates the user's score in the 'scores' table of the database using the provided score and the user's ID.
  
### `get_score(self)`

- Retrieves the user's score from the associated database.
- Returns:
  - The user's score (int) if found, `None` if not found.
- Description:
  - This method retrieves the user's score from the 'scores' table of the database using the user's ID. If the score is found in the database, it is returned; otherwise, `None` is returned.

## Example Usages

### Initializing a `User` instance

```python
# Assuming you have the necessary database connection and user data
user_id = "user123"
user_name = "John"
hashed_password = "hashed_password"
user_conn = sqlite3.connect("user_scores.db")

# Initialize a User instance
user = User(user_conn, user_id, user_name, hashed_password)
```

### Updating the User's Score

```python
# Update the user's score
new_score = 150
user.update_score(new_score)
```

### Retrieving the User's Score

```python
# Retrieve the user's score
user_score = user.get_score()
if user_score is not None:
    print(f"{user.name}'s Score: {user_score}")
else:
    print("User score not found.")
```

## Conclusion

The `User` class offers methods to interact with user information and scores in the Guess-The-Number project. By utilizing the methods provided by this class, you can easily update and retrieve user scores from the associated database.

## Contributing

Contributions are welcome! If you encounter any issues or have suggestions for improvements, please feel free to submit a pull request or open an issue on the GitHub repository.