import random


class GameManager():
    def __init__(self) -> None:
        # set start score to 1000
        self.start_score = 1000

    @staticmethod
    def get_random_number():
        return random.randint(1, 100)

    def compare_guess_to_random_number(self, guess, random_number):
        TOO_HIGH = 1
        TOO_LOW = -1
        CORRECT = 0
        # self.guess_count += 1

        if guess > random_number:
            return TOO_HIGH

        elif guess < random_number:
            return TOO_LOW

        return CORRECT

    def calculate_score(self, guess_count):
        # using "max" to compare the guess_count to 0 so if the score is negative (meaning the player took to many attempts) he just gets 0 points
        self.score = max(self.start_score - 2**(guess_count) + 1, 0)
        return self.score
