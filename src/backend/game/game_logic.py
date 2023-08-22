import random

# obsolete
""" def game(username):
    running = True
    has_won = False
    guess_count = 0
    random_integer = get_random_number()
    while running:
        # running game should be handled by front end
        # outsource comparison of user input against random number
        guess = get_user_input()
        if guess == random_integer:
            has_won = True
            running = False
            return username, guess_count, has_won
        elif guess > random_integer:
            return username, guess_count, has_won, "Try lower"
        elif guess < random_integer:
            return username, guess_count, has_won, "Try higher" """

# TODO Create GameManager class that has methods for number comparison and data persistence
# TODO Remove other .py files


class GameManager():
    def __init__(self) -> None:
        # set start score to 1000
        self.start_score = 1000
    
    def calculate_highscore(self, guess_count):
        # using "max" to compare the guess_count to 0 so if the score is negative (meaning the player took to many attempts) he just gets 0 points
        self.highscore = max(self.start_score - 2**(guess_count - 1), 0)
        return self.highscore
    
    def get_random_number(self):
        return random.randint(1, 100)
    
    
