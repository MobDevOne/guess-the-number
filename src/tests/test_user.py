import unittest
import os
from src.backend.user_manager import UserManager

class TestUser(unittest.TestCase):
    def setUp(self):
        # Set up a test database and a UserManager instance for testing
        self.db_name = "test_user_scores.db"
        self.user_manager = UserManager(self.db_name)

    def tearDown(self):
        # Close the database connection and remove the test database file
        self.user_manager.close()
        os.remove(self.db_name)

    def test_score_operations(self):
            # Test updating and retrieving user scores
            user = self.user_manager.create_user("TestUser", "testpass")
            user.update_score(100)
            self.assertEqual(user.get_score(), 100)

if __name__ == "__main__":
    unittest.main()