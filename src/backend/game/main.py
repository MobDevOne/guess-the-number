from game_logic import game
from calculate_high_score import calculate_highscore


def main():
    player_data = game()
    username = player_data[0]
    guess_count = player_data[1]
    high_score = calculate_highscore(guess_count)
    return username, high_score


if __name__ == "__main__":
    main()
