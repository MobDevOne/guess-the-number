

def calculate_highscore(guess_count):
    start_score = 1000

# using "max" to compare the guess_count to 0 so if the score is negative (meaning the player took to many attempts) he just gets 0 points
    highscore = max(start_score - 2**(guess_count - 1), 0)

    return highscore
