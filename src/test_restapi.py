import unittest
from unittest.mock import patch
from backend.restapi import app
from backend.session_handler import SessionHandler
from backend.game_manager import GameManager
from backend.user_manager import UserManager


class TestApp(unittest.TestCase):

    def setUp(self):
        self.testapp = app.test_client()

    @patch('session_handler.SessionHandler', autospec=True)
    @patch('user_manager.UserManager', autospec=True)
    @patch('game_manager.GameManager', autospec=True)
    def test_start_game_route(self, mock_game_manager, mock_user_manager, mock_session_handler):
        # Mock necessary methods and behavior for session_handler and game_manager
        mock_game_manager.compare_guess_to_random_number.return_value = 0
        mock_session_handler.get_random_number_for_session.return_value = 42
        mock_session_handler.get_username_for_session.return_value = 'testuser'
        mock_session_handler.get_tries.return_value = 3
        # Replace with your User object mock
        mock_user_manager.get_user.return_value = MockUser()

        # Make a POST request to the route
        response = self.testapp.post(
            '/game-guess', json={'session_id': '123', 'guess': 42})

        # Assertions for the response
        self.assertEqual(response.status_code, 200)
        data = response.get_json()
        self.assertEqual(data['status'], 0)
        # Assuming you increment the count in the route
        self.assertEqual(data['guess_count'], 4)


class MockUser:
    def __init__(self):
        self.score = None

    def update_score(self, score):
        # Simulate updating the user's score
        self.score = score

    def get_score(self):
        # Simulate retrieving the user's score
        return self.score


if __name__ == '__main__':
    unittest.main()
