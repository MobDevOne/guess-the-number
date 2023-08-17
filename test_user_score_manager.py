import unittest
import sqlite3
import os
import bcrypt
from user_score_manager import UserScoreManager

class TestUserScoreManager(unittest.TestCase):
    def setUp(self):
        # Set up a test database and a UserScoreManager instance for testing
        self.db_name = "test_user_scores.db"
        self.score_manager = UserScoreManager(self.db_name)

    def tearDown(self):
        # Close the database connection and remove the test database file
        self.score_manager.conn.close()
        os.remove(self.db_name)

    def test_create_user(self):
        # Test creating a new user and verifying password hashing
        user = self.score_manager.create_user("TestUser", "testpass")
        self.assertEqual(user.name, "TestUser")
        
        # Retrieve the stored hashed password from the database
        stored_user = self.score_manager.conn.execute('''
            SELECT password
            FROM users
            WHERE id = ?
        ''', (user.id,)).fetchone()
        
        # Verify that the hashed password matches the expected hash
        self.assertTrue(bcrypt.checkpw("testpass".encode('utf-8'), stored_user[0].encode('utf-8')))

    def test_duplicate_username(self):
        # Test creating users with duplicate usernames
        self.score_manager.create_user("TestUser", "testpass")
        with self.assertRaises(ValueError):
            self.score_manager.create_user("TestUser", "anotherpass")

    def test_verify_password(self):
        # Test verifying user passwords
        user = self.score_manager.create_user("TestUser", "testpass")
        self.assertTrue(self.score_manager.verify_password(user.id, "testpass"))
        self.assertFalse(self.score_manager.verify_password(user.id, "wrongpass"))

    def test_score_operations(self):
        # Test updating and retrieving user scores
        user = self.score_manager.create_user("TestUser", "testpass")
        self.score_manager.update_score(user.id, 100)
        self.assertEqual(self.score_manager.get_score(user.id), 100)

    def test_sql_injection_safety(self):
        # Test SQL injection safety by attempting a malicious username
        malicious_name = "TestUser'; DROP TABLE users; --"
        try:
            self.score_manager.create_user(malicious_name, "testpass")
        except sqlite3.DatabaseError as e:
            # Verify that the DROP TABLE command is not present in the error message
            self.assertNotIn("DROP TABLE", str(e))

if __name__ == "__main__":
    unittest.main()
