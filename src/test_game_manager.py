import unittest
from backend.game_manager import GameManager


class TestGameManager(unittest.TestCase):
    def setUp(self) -> None:
        self.game_manager = GameManager()

    def test_compare_guess_to_random_number(self):
        random_number = 69
        guesses = [32, 0, 75, 99, 69]
        self.assertEqual(self.game_manager.compare_guess_to_random_number(
            guesses[0], random_number), -1)
        self.assertEqual(self.game_manager.compare_guess_to_random_number(
            guesses[1], random_number), -1)
        self.assertEqual(self.game_manager.compare_guess_to_random_number(
            guesses[2], random_number), 1)
        self.assertEqual(self.game_manager.compare_guess_to_random_number(
            guesses[3], random_number), 1)
        self.assertEqual(self.game_manager.compare_guess_to_random_number(
            guesses[4], random_number), 0)

    def test_calculate_score(self):
        guess_counts = [3, 6, 9, 13, 99]
        self.assertEqual(
            self.game_manager.calculate_score(guess_counts[0]), 993)
        self.assertEqual(
            self.game_manager.calculate_score(guess_counts[1]), 937)
        self.assertEqual(
            self.game_manager.calculate_score(guess_counts[2]), 489)
        self.assertEqual(
            self.game_manager.calculate_score(guess_counts[3]), 0)
        self.assertEqual(
            self.game_manager.calculate_score(guess_counts[4]), 0)


if __name__ == "__main__":
    unittest.main()
