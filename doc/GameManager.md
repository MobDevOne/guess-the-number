# GameManager Class

The `GameManager` class is designed to manage a simple number guessing game. It keeps track of the game's score and provides methods for generating a random number, comparing a player's guess to the random number, and calculating the player's score based on the number of attempts.

## Constructor

### `__init__(self) -> None`

- Initializes a new `GameManager` object.
- Sets the initial score to 1000.

## Static Method

### `get_random_number() -> int`

- Returns a random integer between 1 and 100 (inclusive).

## Instance Methods

### `compare_guess_to_random_number(self, guess: int, random_number: int) -> int`

- Compares the player's guess to the random number and returns one of the following:
  - `1` if the guess is too high.
  - `-1` if the guess is too low.
  - `0` if the guess is correct.

### `calculate_score(self, guess_count: int) -> int`

- Calculates the player's score based on the number of attempts (guess_count).
- The score is calculated as follows:
  - Starting score (1000) minus 2 raised to the power of (guess_count - 1).
  - The minimum score is 0; it cannot go negative.

## Constants

- `TOO_HIGH` (1): Indicates that the player's guess is too high.
- `TOO_LOW` (-1): Indicates that the player's guess is too low.
- `CORRECT` (0): Indicates that the player's guess is correct.

### Example Usage

```python
game = GameManager()
random_number = game.get_random_number()
guess = 42
result = game.compare_guess_to_random_number(guess, random_number)
score = game.calculate_score(guess_count)
```
In the example above, you can create a `GameManager` object, generate a random number, make a guess, and determine the result and score for the game
