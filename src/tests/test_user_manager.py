import unittest
import sqlite3
import os
import bcrypt
from src.backend.user_manager import UserManager

class TestUserManager(unittest.TestCase):
    def setUp(self):
        # Set up a test database and a UserManager instance for testing
        self.db_name = "test_user_scores.db"
        self.user_manager = UserManager(self.db_name)

    def tearDown(self):
        # Close the database connection and remove the test database file
        self.user_manager.close()
        os.remove(self.db_name)

    def test_create_user(self):
        # Test creating a new user and error on  duplicate username
        user = self.user_manager.create_user("TestUser", "testpass")
        self.assertEqual(user.name, "TestUser")

        # should raise ValueError, if TestUser realy is created and added to the database
        with self.assertRaises(ValueError):
            self.user_manager.create_user("TestUser", "anotherpass")


    def test_remove_user(self):
        # Test removing an existing and a non-existing user
        user = self.user_manager.create_user("TestUser", "testpass")
        self.assertEqual(user.name, "TestUser")
        
        # Remove existing user should work and return True
        self.assertTrue(self.user_manager.remove_user(user.name))
        # Remove non-existing user because removed earlier should raise ValueError
        with self.assertRaises(ValueError):
            self.user_manager.remove_user("TestUser")

    def test_sql_injection_safety(self):
        # Test SQL injection safety by attempting a malicious username
        malicious_name = "TestUser'; DROP TABLE users; --"
        try:
            self.user_manager.create_user(malicious_name, "testpass")
        except sqlite3.DatabaseError as e:
            # Verify that the DROP TABLE command is not present in the error message
            self.assertNotIn("DROP TABLE", str(e))

if __name__ == "__main__":
    unittest.main()
