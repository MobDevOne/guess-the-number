import random
from enum import Enum

# TODO Create GameManager class that has methods for number comparison and data persistence
# TODO Remove other .py files
# TODO return JSON objects
# TODO rename file to class name


class GameManager():
    def __init__(self) -> None:
        # set start score to 1000
        self.start_score = 1000
       # self.guess_count = 0

    def get_random_number(self):
        return random.randint(1, 100)

    def get_guess_count(self):
        return self.guess_count

    def compare_guess_to_random_integer(self, guess, random_integer):
        class GuessStatus(Enum):
            TOO_HIGH = 1
            TOO_LOW = -1
            CORRECT = 0

        # self.guess_count += 1

        if guess > random_integer:
            return GuessStatus.TOO_HIGH

        elif guess < random_integer:
            return GuessStatus.TOO_LOW

        return GuessStatus.CORRECT

    def calculate_score(self, guess_count):
        # using "max" to compare the guess_count to 0 so if the score is negative (meaning the player took to many attempts) he just gets 0 points
        self.score = max(self.start_score - 2**(guess_count - 1), 0)
        return self.score
